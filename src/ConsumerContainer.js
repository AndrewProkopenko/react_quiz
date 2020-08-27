import React, { Component } from 'react'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'

export default class ConsumerContainer extends Component {
    constructor(props) { 
        super(props)
    }
    render() {
        return (
            <>
                {
                    !this.props.context.isShowResult &&
                    <QuizCard 
                        quections={this.props.context.quiz} 
                        showResult = { this.props.context.showResult}
                    /> 
                }
                <div>
                    {
                        this.props.context.isShowResult && 
                        <QuizResult 
                            result={this.props.context.answeredQuections}
                        />  
                    }
                </div>
            </>
        )
    }
}
