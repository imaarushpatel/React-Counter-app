import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  

  const addValue = () => {
    counter = counter + 1

    setCounter(counter)

    console.log("clicked", counter); 

  }

  const removeValue  = () => {
    setCounter(counter - 1)

  }
 

  return (
    <>
    <h1>React Counter</h1>
    <h2>Counter value: {counter}</h2>

    <button 
    onClick={addValue}> Add value + 1 </button>
     <br/> <hr/>
    <button 
    onClick={removeValue}> Remove value - 1  </button>
    
    </>
  )
}

export default App
