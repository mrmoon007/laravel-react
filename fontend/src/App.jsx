import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
    </>
  )
}

export default App
