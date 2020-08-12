import React, { Component } from 'react'
import {Card, CardHeader, CardBody} from 'reactstrap'

export default class QuizResult extends Component {
   
    computedAnswers() { 
        let counter = 0
        this.props.result.map( item => {
            if(item.correctAnswer === item.userAnswer) counter++
            return 0
        })
        return counter
    }
    render() {
        return (
            <Card className="bg-dark text-light mt-3 mb-3">
                <CardHeader> 
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5>
                                    Сongratulations! <br></br>
                                    <small>Quiz is Over</small>
                                </h5> 

                                <button className='btn btn-answer'>
                                    Try again!(disabled)
                                </button>
                            </div> 

                            <h4>
                                Your Results ( {this.computedAnswers()}/{this.props.result.length} )
                            </h4>
                </CardHeader>
                {
                    this.props.result.map( item => (
                        <CardBody className={ `card-body-answer ${item.userAnswer === item.correctAnswer ? 'right' : 'wrong'}`} key={item.id} >
                            <h5>
                                { item.text}
                            </h5>
                            { 
                                item.options.map( (option, index) => (
                                    <div className="custom-control pl-0 custom-radio my-3" key={index}> 
                                        <label className={` 
                                                            custom-control-label custom-control-label-answer 
                                                            ${item.userAnswer === index ? 'color' : ''}
                                                            ${item.userAnswer === item.correctAnswer ? 'right' : 'wrong'}
                                                        `} >
                                            { option }
                                        </label>
                                        { 
                                            item.userAnswer === index && <span> - Your answer</span>
                                        }
                                        {
                                            item.userAnswer !== item.correctAnswer && item.correctAnswer === index &&   <span className='text-muted'> - Correct answer</span>
                                        }
                                    </div>
                                )) 
                            }
                        </CardBody>
                    ))
                }
                
            </Card>
        )
    }
}

 