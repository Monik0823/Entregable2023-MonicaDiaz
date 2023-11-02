import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Card } from './assets/components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Card></Card>

    </>
  )
}

export default App
