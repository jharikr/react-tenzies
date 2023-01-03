import Die from './components/Die'
import './App.css'

function App() {
  return (
    <main>
      <div className='dice'>
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </main>
  )
}

export default App
