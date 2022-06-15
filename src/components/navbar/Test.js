import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/logo.png'

const Test = () => {
  return (
    <Navbar bg="light" expand="lg"> 
      <Container>
        <Navbar.Brand href="/react_quiz">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand> 
      </Container>
    </Navbar>
  )
}

export default Test