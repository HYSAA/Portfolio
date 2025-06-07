import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About.jsx'

import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='app'>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Contact></Contact>
     </div>
    </>
  )
}

export default App
