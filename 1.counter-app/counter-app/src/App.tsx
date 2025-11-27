import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>
          Count is {count}
        </h1>
        <br />
        <button onClick = {() => setCount(prev => prev + 1)}>
        increase count
        </button>
        <button disabled={count === 0} onClick={() => setCount(prev => prev -1)}>
        decrease count
        </button>
        <button onClick={() => setCount(0)}>
        click To reset
        </button>
      </div>
    </>
  )
}

export default App
