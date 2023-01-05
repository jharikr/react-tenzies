import { useState, useEffect } from 'react'
import Die from './components/Die'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import useWindowDimensions from './hooks/useWindowDimensions.js'
import './App.css'

function App() {
  const [dice, setDice] = useState(generateDice(10))
  const [tenzies, setTenzies] = useState(false)
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld)
    const allSameValue = dice.every(die => die.value === dice[0].value)
    setTenzies(allDiceHeld && allSameValue)
  }, [dice])

  function randomNum() {
    return Math.ceil(Math.random() * 6)
  }

  function generateDice() {
    return [...Array(10)].map(() => ({
      value: randomNum(),
      isHeld: false,
      id: nanoid()
    }))
  }

  function hold(id) {
    setDice(oldDice =>
      oldDice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(generateDice())
      return
    }
    setDice(oldDice =>
      oldDice.map(die => {
        return !die.isHeld ? { ...die, value: randomNum() } : die
      })
    )
  }

  const diceElements = dice.map((die, index) =>
    <Die
      key={index}
      value={die.value}
      held={die.isHeld}
      toggle={() => hold(die.id)}
    />
  )

  return (
    <main>
      {tenzies && <Confetti width={width} height={height} />}
      <h1 className='title main-text'>Tenzies</h1>
      <p className='instructions secondary-text'>
        Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className='dice'>
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}

export default App
