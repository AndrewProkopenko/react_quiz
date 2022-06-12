import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <Container>
        <Row>
            <Col>
                <NavLink to='/react_quiz/theory/orf'>Теория орфография</NavLink>
                <NavLink to='/react_quiz/theory/punk'>Теория пунктуация</NavLink>
                <NavLink to='/react_quiz/test/orf'>Тест орфография</NavLink>
                <NavLink to='/react_quiz/test/punk'>Тест пунктуация</NavLink>
            </Col>
        </Row>
    </Container>
  )
}

export default Main