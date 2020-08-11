import React, { Component } from 'react'

import QuizContext from './QuizContext'

class QuizProvider extends Component { 

    state = {  
        quiz: [ 
            {
                id: 0,
                text: 'typeof(NaN) ?', 
                options: ['null', 'number','undefined', 'error'], 
                correctAnswer: 1 ,
                isAnswered: false, 
                userAnswer: null
            }, 
            {
                id: 1,
                text: '!!(0.5 + 0.1 == 0.6 )', 
                options: ['false', 'true', 'null','undefined'], 
                correctAnswer: 1 ,
                isAnswered: false, 
                userAnswer: null
            },
            {
                id: 2,
                text: '!!(0.2 + 0.1 == 0.3 )', 
                options: ['false', 'true', 'null','undefined'], 
                correctAnswer: 0 ,
                isAnswered: false, 
                userAnswer: null
            },
            {
                id: 3,
                text: '9 + "1" ', 
                options: ['"91"', '91', 'NaN', '9 "1" '], 
                correctAnswer: 0 ,
                isAnswered: false, 
                userAnswer: null
            },
            {
                id: 4,
                text: '91 - "1" ', 
                options: ['91 - "1" ', '911', '90', '99 '], 
                correctAnswer: 2 ,
                isAnswered: false, 
                userAnswer: null
            },
            {
                id: 5,
                text: 'true + true + true = ?', 
                options: ['truetruetrue" ', 'undefined', 'true', '3 '], 
                correctAnswer: 3 ,
                isAnswered: false, 
                userAnswer: null
            },
            {
                id: 6,
                text: '!!([]==0)', 
                options: ['false', 'true', 'null','undefined'], 
                correctAnswer: 1,
                isAnswered: false, 
                userAnswer: null
            },
            {
                id: 7,
                text: '[] + []', 
                options: ['<empty string>', '"[object Object]"', '[ ]', 'typeError'], 
                correctAnswer: 0,
                isAnswered: false, 
                userAnswer: null
            },
            {
                id: 8,
                text: '[] + {}', 
                options: ['<empty string>', '"[object Object]"', '[ ]', 'typeError'], 
                correctAnswer: 1,
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
                quiz: this.state.quiz,
                activeQuection: this.state.activeQuection, 
                answeredQuections: this.state.quiz, 
                isShowResult: this.state.isShowResult, 

                showResult: (answers) => {   
                    this.setState({ 
                        isShowResult: true
                    })  
                }
            } }>
                {this.props.children}
            </QuizContext.Provider>
        )
    }

}

export default QuizProvider; 
