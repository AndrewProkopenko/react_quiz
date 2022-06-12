import React, { Component } from 'react'

import QuizContext from './QuizContext'

class QuizProvider extends Component { 

    state = {  
        quiz_orf: [ 
            {
                id: 0,
                text: 'Оргфография вопрос 1 ?', 
                options: ['1', '2','3', '4'], 
                correctAnswer: 1 ,
                isAnswered: false, 
                userAnswer: null
            },  
            {
                id: 1,
                text: 'Оргфография вопрос 2 ?', 
                options: ['1', '2','3', '4'], 
                correctAnswer: 1 ,
                isAnswered: false, 
                userAnswer: null
            },  
        ],
        quiz_punk: [ 
            {
                id: 0,
                text: 'Пунктуация вопрос 1 ?', 
                options: ['1', '2','3', '4'], 
                correctAnswer: 1 ,
                isAnswered: false, 
                userAnswer: null
            },  
            {
                id: 2,
                text: 'Пунктуация вопрос 2 ?', 
                options: ['1', '2','3', '4'], 
                correctAnswer: 1 ,
                isAnswered: false, 
                userAnswer: null
            },  
        ],
        activeQuection: 0, 
        answeredQuections: [], 
        isShowResult: false 

    }

    render() { 
        return (
            <QuizContext.Provider value={ { 
                quiz_orf: this.state.quiz_orf,
                quiz_punk: this.state.quiz_punk,
                activeQuection: this.state.activeQuection, 
                answeredQuections:  this.state.answeredQuections, 
                isShowResult: this.state.isShowResult, 

                showResult: (answers) => {   
                    this.setState({ 
                        isShowResult: true,
                        answeredQuections: answers
                    })  
                }
            } }>
                {this.props.children}
            </QuizContext.Provider>
        )
    }

}

export default QuizProvider; 
