import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {

  const scrollToTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <>
    <Navbar collapseOnSelect expand="md" className='color-nav' variant="dark" sticky='top'>
        {/* <Container> */}
          <Navbar.Brand href="#home" onClick={scrollToTop} className='ps-3'>Zahid Allaulddin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-2' />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href='#about' className='px-4 fw-semibold'>About</Nav.Link>
            <Nav.Link href="#projects" className='px-4 fw-semibold'>Projects</Nav.Link>
            <Nav.Link href="#skills" className='px-4 fw-semibold'>Skills</Nav.Link>
            <Nav.Link href="#contact" className='px-4 fw-semibold'>Contact</Nav.Link>
            <Nav.Link href="#resume" className='px-4 fw-semibold'>Resume</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}
