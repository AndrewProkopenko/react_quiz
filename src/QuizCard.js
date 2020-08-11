import React, {Component} from 'react' 
import {Card, CardHeader, CardBody} from 'reactstrap'

class QuizCard extends Component { 
    constructor(props) { 
        super(props) 
        this.state = { 
            activeQuection: 0,
            quections: this.props.quections, 
            userAnswer: null,  
            answeredQuections: [],
            answerCounter: 0
        } 
        this.addAnswer = this.addAnswer.bind(this)
    }
   
    changeAnswer(id) { 
        this.setState( { 
            userAnswer : id
        })  
    }
    skipAnswer(id) { 
          
        if(id === this.state.quections.length - 1 ) {  
            let skiped = []
            this.props.quections.map( item => {
                if(item.isAnswered === false) { 
                    skiped.push(item)
                }
                return true
            })
            this.setState({ 
                activeQuection: skiped[0].id
            })  
        }
        else {  
            let newActiveNumber = this.state.activeQuection + 1  
            if(this.props.quections[newActiveNumber].isAnswered === true ) {
                while(this.props.quections[newActiveNumber].isAnswered === true ) { 
                    newActiveNumber++
                }
            }
            this.setState({ 
                activeQuection: newActiveNumber
            })
        }
       
    }
    addAnswer(activeId) {    
        let newActiveNumber = this.state.activeQuection 
        let newAnswerCounter = this.state.answerCounter + 1
        if( activeId === this.props.quections.length - 1 ) {  
            let skiped = []
             
            this.props.quections.map( item => {
                if(item.isAnswered === false) { 
                    skiped.push(item)
                }
                return true
            })    
            setTimeout(() => {
                this.setState({ 
                    activeQuection: skiped[0].id
                }) 
            }, 200); 

        } else { 
            if(this.state.answerCounter < this.props.quections.length - 1) {
                newActiveNumber++
                if(this.props.quections[newActiveNumber].isAnswered === true ) {
                    while(this.props.quections[newActiveNumber].isAnswered === true ) { 
                        if(newActiveNumber < this.props.quections.length) newActiveNumber++
                        else newActiveNumber--
                    }
                }
            }
            
        } 
        console.log(newActiveNumber)
        
        let newAnsweredArray = this.state.answeredQuections.slice()
        let answer = this.props.quections[activeId]

        answer.isAnswered = true
        answer.userAnswer = this.state.userAnswer

        newAnsweredArray.push(answer)
 
        this.setState({ 
            activeQuection: newActiveNumber, 
            answerCounter: newAnswerCounter, 
            userAnswer: null
        })  
          
        
        if(this.state.answerCounter === this.props.quections.length - 1) { 
            this.props.showResult(this.props.quections)
        } 
 
    } 
    render() {  
        return(
            <Card className="bg-dark text-light"> 
                    {
                        this.state.answerCounter < this.props.quections.length && 
                        <CardHeader className='border-0'>
                            {
                                this.state.activeQuection >= 0 && <div className='d-flex justify-content-between  align-items-center'>
                                    <h6 className='mb-0'>
                                        <b>Quection №{ this.state.activeQuection + 1 } </b>
                                    </h6>
                                    <span className='btn-skip' onClick={()=>(  this.skipAnswer(this.state.activeQuection) )} >
                                        Skip
                                    </span> 
                                </div>
                            }
                        
                        </CardHeader>
                    }
                    {
                        this.state.answerCounter < this.props.quections.length && 

                        <div className='progress-quiz'>
                            {
                                this.props.quections.map( quection => (
                                    <div 
                                        className = { ` progress-quiz-item 
                                                        ${(quection.id === this.state.activeQuection) ? 'active' : ''} 
                                                        ${quection.isAnswered === true ? 'answered' : ''}
                                                        ${quection.userAnswer === quection.correctAnswer ? 'right' : 'wrong'}
                                                    ` }
                                        key={quection.id}
                                    ></div>
                                ) )
                            }
                        
                        </div>
                    }
                    { 
                        this.state.answerCounter < this.props.quections.length &&  
                        
                        <CardBody>
                        
                            <h5>
                                { this.props.quections[this.state.activeQuection].text}
                            </h5>

                            {
                                this.props.quections[this.state.activeQuection].options.map( (option, index) => (
                                    <div className="option_item" 
                                         key={index}
                                         onClick={()=>{this.changeAnswer(index)}}     
                                    >
                                        
                                        <i className={` ${ index === this.state.userAnswer ? 'active' : ''} `}></i>
                                        <p className="custom-control-label2" htmlFor={`customRadio${index}`} >
                                            { option }
                                        </p>
                                    </div>
                                ))
                            } 

                            
                            <button 
                                type="button" 
                                className="btn btn-answer" 
                                disabled={(this.state.userAnswer == null) ? true : false}
                                onClick={ () => { this.addAnswer(this.state.activeQuection) } }
                            >
                                Answer
                            </button>
                            
                        </CardBody>
                    }
                    {
                        this.state.answerCounter >= this.props.quections.length && 
                        <CardBody>
                            <h5>
                                Сongratulations! <br></br>
                                <small>Quiz is Over</small>
                            </h5>
                        </CardBody>
                    }
                   
            </Card>
        )
    }
}

export default QuizCard
