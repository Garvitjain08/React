import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
const addvalue = () => {
  setcounter(counter+1)
}
  const removevalue = () => {
    setcounter(counter-1) 
  }


  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>ADD VALUE {counter}</button> <br/>
      <button onClick={removevalue}>REMOVE VALUE {counter}</button>
    </>
  )
}

export default App
