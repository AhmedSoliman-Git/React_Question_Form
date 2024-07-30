import { useState } from "react";
import Answer from "./Answer";
import { Question } from "../../questions";
import Progress from "./Progress.Jsx";
export default function Questions({ItemIndex,skippedQuestion,onSelect}){
    const [answerState , setAnswerState] = useState({
        selectedAnswer : '',
        isCorrect : null
    })

    function handleSelectedAnswer(answer){
        setAnswerState({
            selectedAnswer : answer,
            isCorrect : null
        })
        setTimeout(()=>{
            setAnswerState({
                selectedAnswer : answer,
                isCorrect : Question[ItemIndex].answers[0] === answer,
            })
            setTimeout(()=>{
                onSelect(answer)
            },2000)

        },1000)
    }

    let answerShape = '';
    if(answerState.selectedAnswer && answerState.isCorrect != null ){
        answerShape = answerState.isCorrect ? 'correct' : 'wrong' ;
    }
    else if(answerState.selectedAnswer) {
        answerShape = 'answered'
    }

    let timer = 10000;
    if(answerState.selectedAnswer) {
        timer = 1000
    }
    if(answerState.isCorrect !=null ) {
        timer = 2000
    }




    return ( 
    <div id="question">
    <Progress
    key={timer}
    mode={answerShape}
//MOST IMPORTANT NOTE IN REACT 
//   we know that we use key in lists and like that 
// the SECOND USE OF IT 
// that it's reExecute the componenet dependent of any value will you put and after this value change the 
//component reExecute again // VERY IMPORTANT NOTE
    mainTimer = {timer} 
    handleQuestionChange={answerState.selectedAnswer == ''? skippedQuestion : undefined}/>

    <h2 style={{
    textTransform:'none'
    }}>{Question[ItemIndex].text}</h2>
    
    <Answer 
    Question = {Question}
    ItemIndex={ItemIndex}
    selectedAnswer={answerState.selectedAnswer}
    answerClass = {answerShape}
    handleUpdateIndex={handleSelectedAnswer}
    />
    


    </div>

    )
}