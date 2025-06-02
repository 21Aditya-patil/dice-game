import './App.css'
import { useState } from 'react'
import Start from "./components/Start"
import Gameplay from './components/Gameplay'


function App() {
  const [isStarted, setIsStarted] = useState(false)

  const handleClick = () => {
    setIsStarted((prev) => !prev)
  }

  return (
    <>
    {isStarted ? <Gameplay /> : <Start toggle={handleClick}/>}
    </>
  )
}

export default App
