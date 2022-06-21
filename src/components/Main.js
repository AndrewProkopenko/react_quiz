import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import text from '../assets/text.png'

const Main = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='mt-5'>
                        <Card.Img
                            src={text}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;