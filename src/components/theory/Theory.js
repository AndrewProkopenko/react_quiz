import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import OrfBase from './OrfBase'
import PunkBase from './PunkBase'

const Theory = () => {

    const { type } = useParams()

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='mt-5'>
                        <Card.Header>
                            <h3 className='mb-0 text-center'>Теория по {type === 'orf' ? 'орфографии' : 'пунктуации'}</h3>
                        </Card.Header>
                        <Card.Body>
                            {type === 'orf' ? <OrfBase /> : <PunkBase />}
                            <Button as={NavLink} to={`/react_quiz/test/${type}`}>
                                Начать тест
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Theory