import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App({ name = "Rahul" }: { name?: string }) {
  const [count, setCount] = useState(0)

  return (
    <h1 className='app'>
      {name}
    </h1>
  )
}

export default App
