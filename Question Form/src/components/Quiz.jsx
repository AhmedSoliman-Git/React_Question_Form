import { useState ,useCallback, useEffect } from "react";
import { Question } from "../../questions";
import Trophy from "../assets/quiz-complete.png"
import Questions from "./Questions.jsx";
import Summary from "./Summary";
export default function Quiz(){
    const [questionArr , setQuestionArray] = useState([]);
    // const [shuffle , setShuffle] = useState([])
    const ItemIndex =  questionArr.length  ;
    


    const handleUpdateIndex = useCallback(function handleUpdateIndex(answerClicked){
        setQuestionArray((prev => {
            return [...prev , answerClicked]
        }
        ))
    } ,[])





    const skippedQuestion = useCallback(()=> 
    {handleUpdateIndex(null)}
    ,[handleUpdateIndex])

    if(ItemIndex === Question.length){
        return (
            <Summary answers={questionArr}/>
        )
    }
    // useEffect(()=>{

    //     const shuffleAnswers = [...Question[ItemIndex].answers];
    //     shuffleAnswers.sort(()=> Math.random() - 0.5);
    //     setShuffle(shuffleAnswers)
    // },[ItemIndex])



return(
    <div id="quiz">
        <div id="question-overview">
            <Questions
            key={ItemIndex}
            ItemIndex={ItemIndex}
            skippedQuestion={skippedQuestion}
            onSelect={handleUpdateIndex}
            />
            
        </div>
</div>
    )}
