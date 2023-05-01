import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <>
    <Navbar expand="sm" className='color-nav' variant="dark">
        {/* <Container> */}
          <Navbar.Brand href="#home" className='ps-3'>Zahid Allaulddin</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className='px-4 fw-semibold'>About</Nav.Link>
            <Nav.Link href="#projects" className='px-4 fw-semibold'>Projects</Nav.Link>
            <Nav.Link href="#resume" className='px-4 fw-semibold'>Resume</Nav.Link>
            <Nav.Link href="#contact" className='px-4 fw-semibold'>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}
