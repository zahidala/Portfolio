import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About';
import Projects from './Components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Projects />
    </>
  )
}
