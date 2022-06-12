import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import OrfBase from './OrfBase'
import PunkBase from './PunkBase'

const Theory = () => {

    const { type } = useParams()

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Теория по {type === 'orf' ? 'орфографии' : 'пунктуации'}</h3>
                    {type === 'orf' ? <OrfBase /> : <PunkBase />}

                    <Button as={NavLink} to={`/react_quiz/test/${type}`} >
                        Начать тест
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Theory