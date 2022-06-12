import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import QuizContext from '../../context/QuizContext'
import QuizCard from './QuizCard'
import QuizResult from './QuizResult'


const ConsumerContainer = () => {

    const { type } = useParams()

    const { isShowResult, quiz_orf, quiz_punk, showResult, answeredQuections } = useContext(QuizContext)

    return (
        <>
            {
                !isShowResult &&
                <QuizCard
                    quections={type === 'orf' ?  quiz_orf : quiz_punk }
                    showResult={showResult}
                />
            }
            <div>
                {
                    isShowResult &&
                    <QuizResult
                        result={answeredQuections}
                    />
                }
            </div>
        </>
    )
}

export default ConsumerContainer