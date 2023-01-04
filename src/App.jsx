import { useState } from 'react'
import Die from './components/Die'
import './App.css'

function App() {
  const [dice, setDice] = useState(generateDice())

  function generateDice() {
    return [...Array(10)].map(() => Math.ceil(Math.random() * 6))
  }

  const diceElements = dice.map((dieVaL, index) =>
    <Die key={index} value={dieVaL} />
  )

  function rollDice() {
    setDice(generateDice())
  }

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
