import Trophy from '../assets/quiz-complete.png'
import {Question} from '../../questions'
export default function Summary({answers}){
    const answerCorrectly  = answers.filter((el,index)=> el === Question[index].answers[0]).length;
    const Skipped = answers.filter((el)=> el === null).length ;
    const shared_correct_value = Math.round((answerCorrectly / answers.length ) * 100) ;
    const shared_null_value = Math.round((Skipped  / answers.length  ) * 100) ;
    const shared_wrong_value =  100 - (shared_correct_value + shared_null_value ) ;


    
    return (
        <div id="summary">
            <img src={Trophy} alt="Trophy Photo" />
            <h2>Quiz Completed</h2>
            <div id='summary-stats'>
                <p>
                    <span className ='number' >{shared_null_value}%</span>
                    <span className ='text' >skipped</span>
                </p>
                <p>
                    <span className ='number' >{shared_correct_value}%</span>
                    <span className ='text' >answered correctly</span>
                </p>
                <p>
                    <span className ='number' >{shared_wrong_value}%</span>
                    <span className ='text' >answered un correctly</span>
                </p>
                
            </div> 
            <ol>
                {answers.map((answer,index)=>{
                    let cssClass = 'user-answer'

                    if(answer === null){
                    cssClass += ' skipped'
                        }
                    else if(answer === Question[index].answers[0]){
                        cssClass += ' correct'
                    }
                    else {
                        cssClass += ' wrong'

                    }


                    // index is a default value used built in in map that makes index to increase 
                    //means it starts default from 1 and it increment 1 for each value in array
                    // 0 for first element in array 1 for second and like that
                    return <li>
                        <h3>{index+1}</h3>
                        <p className = 'question'>{Question[index].text}</p>
                        <p className = {cssClass}>{ answer??'Skipped' }</p>
                    </li>

                })}

            </ol>
        </div>
    )

}