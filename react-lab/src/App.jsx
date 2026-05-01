import { useState } from 'react'
import './App.css'
import Greeting from "./components/Greeting";
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <Greeting />
      <NavBar />
    </>
  )
}

export default App
