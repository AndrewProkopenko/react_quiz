import React from 'react'

import QuizContext from './context/QuizContext'
import ConsumerContainer from './ConsumerContainer'
// import Notification from './Notification/Notification'

import {Container, Row, Col} from 'reactstrap'

const QuizContainer = () => { 
    // const [visible, setVisible] = React.useState(false); 
    // const setNotification = function() {  
    //     setVisible(true) 
    // }
    return( 
        <Container>
           <Row className={'justify-content-center'}>
               <Col md='6'>  
                   {
                        // visible && <Notification color={'dark'} visible={visible} /> 
                   }
                   <QuizContext.Consumer>  
                        {
                            context => (
                                <ConsumerContainer context = {context} />  
                            )
                        }
                   </QuizContext.Consumer>
                   
               </Col>
           </Row>
        </Container>
    )
}
export default QuizContainer