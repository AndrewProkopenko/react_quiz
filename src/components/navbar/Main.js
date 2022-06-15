import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/logo.png'

const Main = () => {
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/react_quiz/theory/orf">Теория орфография</Nav.Link>
            <Nav.Link href="/react_quiz/theory/punk">Теория пунктуация</Nav.Link>
            <NavDropdown title="Тест" id="basic-nav-dropdown">
              <NavDropdown.Item href="/react_quiz/test/orf">Тест орфография</NavDropdown.Item>
              <NavDropdown.Item href="/react_quiz/test/punk">Тест пунктуация</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Main