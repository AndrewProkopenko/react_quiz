import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
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
            <NavLink to="/theory/orf" className={'py-3 text-dark text-decoration-none mr-4'}>Теория орфография</NavLink>
            <NavLink to="/theory/punk" className={'py-3 text-dark text-decoration-none mr-4'}>Теория пунктуация</NavLink>
            <NavDropdown title="Тест" id="basic-nav-dropdown" className={'py-2 text-dark text-decoration-none'}>
              <NavDropdown.Item >
                <NavLink to="/test/orf" className={'py-3 text-dark text-decoration-none'}>Тест орфография</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item  >
                <NavLink to="/test/punk" className={'py-3 text-dark text-decoration-none'}>Тест пунктуация</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Main