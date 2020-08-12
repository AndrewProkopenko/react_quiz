import React from 'react'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'
import QuizContext from './context/QuizContext'
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
                                <div>
                                   {
                                       !context.isShowResult &&
                                       <QuizCard 
                                            quections={context.quiz} 
                                            showResult = { context.showResult}
                                        /> 
                                   }
                                    <div>
                                        {
                                            context.isShowResult && 
                                            <QuizResult 
                                                result={context.answeredQuections}
                                            />  
                                        }
                                    </div>
                                </div>
                           ) 
                       } 
                       
                   </QuizContext.Consumer>
                   
               </Col>
           </Row>
        </Container>
    )
}
export default QuizContainer