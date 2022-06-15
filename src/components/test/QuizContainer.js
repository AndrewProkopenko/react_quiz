import React from 'react'
 
import ConsumerContainer from './ConsumerContainer'

import { Container, Row, Col } from 'react-bootstrap' 

const QuizContainer = () => {

    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col md='8'> 
                    <ConsumerContainer />
                </Col>
            </Row>
        </Container>
    )
}
export default QuizContainer