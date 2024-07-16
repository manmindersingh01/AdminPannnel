import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@material-tailwind/react";
import { NavbarDefault } from './components/NavbarDefault';
import Hero from './components/Hero';
import CardInput from './components/CardInput';
import Inputform from './components/Inputform';
import { Gallery } from './components/Gallery';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarDefault />
      <Inputform />
      <Gallery />
    </>
  )
}

export default App
