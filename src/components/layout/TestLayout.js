import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Test from '../navbar/Test'
import ConsumerContainer from '../test/ConsumerContainer'

const TestLayout = () => {
  return (
    <div>
      <Test />
      <Container>
        <Row className={'justify-content-center'}>
          <Col md='8'>
            <ConsumerContainer />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TestLayout