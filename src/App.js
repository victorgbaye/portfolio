import React from 'react'
import Navbar from './Navbar'
import './App.css'
import HeroSection from './HeroSection'
import Projects from './Projects'
import TechStack from './TechStack'
// import Contact from './Contact'

const App = () => {
  return (
    <>
    <Navbar/>
   <HeroSection/>
   <Projects/>
   <TechStack/>
   {/* <Contact/> */}
    </>
  )
}

export default App
