import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About';
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Contact from './Components/Contact';
import Skills from './Components/Skills';

export default function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}
