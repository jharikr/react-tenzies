import { useState } from 'react'
import Die from './components/Die'
import { nanoid } from "nanoid"
import './App.css'

function App() {
  const [dice, setDice] = useState(generateDice(10))

  function randomNum() {
    return Math.ceil(Math.random() * 6)
  }

  function generateDice(num) {
    return [...Array(num)].map(() => ({
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
      <div className='dice'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
