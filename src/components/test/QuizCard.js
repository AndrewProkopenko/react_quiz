import React, { useState, useEffect, useContext } from 'react'
import { Card } from 'react-bootstrap';
import QuizContext from '../../context/QuizContext';

const QuizCardRebase = (props) => {

    const { showResult } = useContext(QuizContext);

    const [activeQuection, setActiveQuection] = useState(props.quections[0]);
    const [userAnswer, setUserAnswer] = useState(null);
    const [answeredQuections, setAnsweredQuections] = useState([]);
    const [answerCounter, setAnswerCounter] = useState(0);


    const renderOptions = () => {
        return (
            activeQuection.options.map((option, index) => (
                <div className="option_item"
                    key={index}
                    onClick={() => { setUserAnswer(index) }}
                >

                    <i className={` ${index === userAnswer ? 'active' : ''} `}></i>
                    <p>
                        {option}
                    </p>
                </div>
            ))
        )
    }
    const renderProgress = () => {
        return (
            answerCounter < props.quections.length &&
            <div className='progress-quiz'>
                {
                    props.quections.map((quection, index) => (
                        <div
                            className={` progress-quiz-item 
                                            ${(quection.id === activeQuection) ? 'active' : ''} 
                                            ${answeredQuections[index]?.isAnswered === true ? 'answered' : ''} 
                                            ${answeredQuections[index]?.userAnswer === quection.correctAnswer ? 'right' : 'wrong'}
                                        ` }
                            key={quection.id}
                        ></div>
                    ))
                }

            </div>
        )
    }

    const addAnswer = () => {
        const sliced = answeredQuections.slice()
        console.log(activeQuection, userAnswer)
        sliced.push({
            ...activeQuection, ... {
                userAnswer: userAnswer,
                isAnswered: true
            }
        })

        setAnsweredQuections(sliced)
        setAnswerCounter(prev => prev + 1)
        setUserAnswer(null)
    }

    useEffect(() => {
        if (answerCounter === props.quections.length) {
            showResult(answeredQuections)
        }
        else {
            setActiveQuection(props.quections[answerCounter])
        }

    }, [answerCounter]);

    return (
        <Card className="bg-dark text-light mt-5 d-flex flex-column" style={{ minHeight: 500 }}>
            {
                <Card.Header className='border-0'>
                    <div className='d-flex justify-content-between  align-items-center'>
                        <h6 className='mb-0'>
                            <b>Вопрос №{activeQuection.id + 1} </b>
                        </h6>
                    </div>
                </Card.Header>
            }
            {
                renderProgress()
            }
            <Card.Body className='flex-grow-1'>

                <h4>
                    {activeQuection.text}
                </h4>

                {renderOptions()}

            </Card.Body>
            <Card.Footer className='p-0'> 
                <button
                    type="button"
                    className="btn btn-answer"
                    disabled={userAnswer === null}
                    onClick={addAnswer}
                >
                    Ответить
                </button>
            </Card.Footer>


        </Card>
    )
}

export default QuizCardRebase