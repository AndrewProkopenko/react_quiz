import React, { Component } from 'react'
import {Card } from 'react-bootstrap'

export default class QuizResult extends Component {
    constructor(props) {
        super(props) 
        
        this.renderAnswers = this.renderAnswers.bind(this)
        this.renderOptions = this.renderOptions.bind(this)
    }
   
    computedAnswers() { 
        let counter = 0
        this.props.result.map( item => {
            if(item.correctAnswer === item.userAnswer) counter++
            return 0
        })
        return counter
    }
    renderAnswers() {
        return(
            this.props.result.map( item => (
                <Card.Body className={ `card-body-answer ${item.userAnswer === item.correctAnswer ? 'right' : 'wrong'}`} key={item.id} >
                    <small className='text-muted'>
                        Quection № { item.id + 1}
                    </small>
                    <h5>
                        { item.text}
                    </h5>
                    { 
                        this.renderOptions(item) 
                    }
                </Card.Body>
            ))
        )
    }

    renderOptions(item) { 
        return(
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
                        item.userAnswer !== item.correctAnswer && item.correctAnswer === index && <span className='text-muted'> - Correct answer</span>
                    }
                </div>
            )) 
        )
    }
    render() {
        let yourResult = this.computedAnswers() +'/'+ this.props.result.length
        return (
            <Card className="bg-dark text-light mt-3 mb-3">
                <Card.Header> 
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
                                Your Result ( {yourResult} )
                            </h4>
                </Card.Header>
                {
                    this.renderAnswers()
                } 
            </Card>
        )
    }
}

 