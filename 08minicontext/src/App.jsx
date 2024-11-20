import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profile'

function App() {


  return (
    <>
    <UserContextProvider>
      <h1>CHAIWALE</h1>
      <login/>
      <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
