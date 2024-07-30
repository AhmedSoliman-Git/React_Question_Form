import { useRef } from "react";
export default function Answer({Question,ItemIndex,selectedAnswer,handleUpdateIndex,answerClass}){
    const shuffleItems = useRef();
    if(!shuffleItems.current){ 
        // tells him that the ref is undefined because no value in it now 
        // here we use useRef because it's contains value that not changed to help us to avoid un nessary shuffle
        // we use use effect in app to solve it 
        //we have problem with key prop that i cant give more than 1 comp the same key so we try to make them in one comp
        shuffleItems.current = [...Question[ItemIndex].answers];
        shuffleItems.current.sort(()=>Math.random()- 0.5) ;
    }

    return <div id="answers">
    <div className="answer">
        <ul>
            {shuffleItems.current.map(answer => {
            let cssClass = '';
            const isSelected =  selectedAnswer === answer ;
            if(isSelected){
                cssClass ='selected'
                }
            if((answerClass ==='wrong'||answerClass === 'correct') && isSelected){
                cssClass = answerClass
                }


                return <li key={answer}>
                    <button onClick={()=>handleUpdateIndex(answer)} className={cssClass} disabled={selectedAnswer !='' }>{answer}</button>
                </li>
                })}
        </ul>
    </div>
</div>
}