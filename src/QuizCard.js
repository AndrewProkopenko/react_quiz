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
        this.skipAnswer = this.skipAnswer.bind(this)
        this.renderProgress = this.renderProgress.bind(this)
        this.isButtonDisabled = this.isButtonDisabled.bind(this)
    }
   
    changeAnswer(id) { 
        this.setState( { 
            userAnswer : id
        })  
    }
    skipAnswer() { 
        let id = this.state.activeQuection
        // если пользователь пытается скипнуть последний вопрос, то создать массив скипнутых вопросов и перейти на первый
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
            // если пользователь скипает не последний вопрос, то инкремент активного вопроса
            let newActiveNumber = this.state.activeQuection + 1  

            //если новый активный вопрос уже отвечен инкрементить до тех  пор пока не найдется неотвеченный вопрос 
            if(this.props.quections[newActiveNumber].isAnswered === true ) {
                while(this.props.quections[newActiveNumber].isAnswered === true ) { 
                    newActiveNumber++
                }
            }
            this.setState({ 
                activeQuection: newActiveNumber
            })
        }
        this.setState( { 
            userAnswer : null
        })  
       
    }
    addAnswer() {     
        let activeId = this.state.activeQuection
        //newActiveNumber - переменная в которой считается новое значение активного вопроса 
        //newAnswerCounter - переменная в которой считается новое значение количества ответов
        let newActiveNumber = this.state.activeQuection 
        let newAnswerCounter = this.state.answerCounter + 1
        
        // проверка: если активный вопрос является последним для пересчета newActiveNumber
        // если true: создать массив неотвеченных вопросов и сделать активным первый из неотвеченных
        if( activeId === this.props.quections.length - 1 ) {  
            let skiped = []
             
            this.props.quections.map( item => {
                if(item.isAnswered === false) { 
                    skiped.push(item)
                }
                return true
            })    
             
            // без таймаута не успевает посчитаться skiped[0].id
            // не знаю как исправить 
            setTimeout(() => {
                this.setState({ 
                    activeQuection: skiped[0].id
                }) 
            }, 100);
           

        } else { 

            // newActiveNumber всегда плюсуется 
            
            // if(this.state.answerCounter < this.props.quections.length - 1) {
                newActiveNumber++
                //провека: если newActiveNumber после инкремента уже отвеченный или newActiveNumber больше количества вопросов
                if(this.props.quections[newActiveNumber].isAnswered === true && this.state.answerCounter < this.props.quections.length - 1 ) {

                    //
                    while(this.state.quections[newActiveNumber].isAnswered === true ) { 
                        if(newActiveNumber < this.props.quections.length) newActiveNumber++
                        else newActiveNumber--
                    }
                }
            // }
            
        }  
        

        // блок ниже создает массив на основе вопросов, ставит ответ пользователя и меняет статус isAnswered 
        
        let newAnsweredArray = this.state.answeredQuections.slice() 
        let answer = this.state.quections[activeId]
        // let answer = Object.assign({}, this.state.quections[activeId])
         
 
        //блок бесполезен так как в двух строчках ниже меняется значение не только нового массива но и значение props из контекста 
        // я не хотел бы менять значен пропсов, но оно меняется , хз 
        answer.isAnswered = true
        answer.userAnswer = this.state.userAnswer 

        newAnsweredArray.push(answer)
        console.log(answer)
        console.log(newAnsweredArray)
 
        this.setState({ 
            activeQuection: newActiveNumber, 
            answerCounter: newAnswerCounter, 
            userAnswer: null, 
            answeredQuections: newAnsweredArray, 
        })  
         
          
        //если есть ответы на все вопросы - показать результаты
        // таймаут тк не успевает записаться this.state.answeredQuections
        if(this.state.answerCounter === this.props.quections.length - 1) { 
            setTimeout(() => {
                 this.props.showResult(this.state.answeredQuections)
            }, 100);
        } 
 
    } 

    renderProgress() { 
        return(
            this.state.answerCounter < this.props.quections.length && 

            <div className='progress-quiz'>
                {
                    this.state.quections.map( quection => ( 
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
        )
    }
    renderOptions() { 
        return(
            this.props.quections[this.state.activeQuection].options.map( (option, index) => (
                <div className="option_item" 
                     key={index}
                     onClick={ () => {this.changeAnswer(index)} }     
                >
                    
                    <i className={` ${ index === this.state.userAnswer ? 'active' : ''} `}></i>
                    <p>
                        { option }
                    </p>
                </div>
            ))
        )
    }
    isButtonDisabled() { 
       return (this.state.userAnswer == null) ? true : false
    } 
    
    render() {  
        let activeQuection = this.state.activeQuection, 
            quectionsLength= this.props.quections.length, 
            answerCounter = this.state.answerCounter, 
            quectionText = this.props.quections[this.state.activeQuection].text

        return(
            <Card className="bg-dark text-light"> 
                    {
                        answerCounter < quectionsLength && 
                        <CardHeader className='border-0'> 
                                <div className='d-flex justify-content-between  align-items-center'>
                                    <h6 className='mb-0'>
                                        <b>Quection №{ activeQuection + 1 } </b>
                                    </h6>
                                    {   
                                        answerCounter < quectionsLength - 1 && 
                                        <span className='btn-skip' onClick={this.skipAnswer} >
                                            Skip
                                        </span> 
                                    }
                                </div> 
                        </CardHeader>
                    }
                    {
                        this.renderProgress()
                    }
                    { 
                        answerCounter < quectionsLength &&  
                        
                        <CardBody>
                        
                            <h4>
                                { quectionText }
                            </h4>

                            { this.renderOptions() }  

                            <button 
                                type="button" 
                                className="btn btn-answer" 
                                disabled={ this.isButtonDisabled() } 
                                onClick={ this.addAnswer }
                            >
                                Answer
                            </button>
                            
                        </CardBody>
                    }
                   
                   
            </Card>
        )
    }
}

export default QuizCard
