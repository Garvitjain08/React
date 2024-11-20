import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  return (
  <>
     <h1 className='bg-green-400 text-blue-100 p-8 rounded-full'> hello </h1>
    <Card  username="garry" btntxt="click me "/>
    <Card username="nitin" />
    </>
  )
}

export default App
