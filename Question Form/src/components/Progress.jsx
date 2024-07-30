import { useEffect, useState } from "react"

export default function Progress({mainTimer , handleQuestionChange, mode}){
    const[remainingTime , setRemainingTime] = useState(mainTimer);
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            handleQuestionChange()
        },mainTimer)

        return()=>{
            clearTimeout(timeOut) ;
            //here i removed it to ensure it will be cleared after every execute and run again
            // it helps me in the last try to remove it forever
        }
    } , [mainTimer,handleQuestionChange])



useEffect(()=>{
    const Interval = setInterval(()=>{
        setRemainingTime(prev => prev - 109)
    },100)
    
    return ()=>{
        clearInterval(Interval) 
        // here we use clear interval to gurantee that it will removed and execute again with out a previous
        // value stored  يعني يشتغل من الاول واضمن انه يرجع للبدايه يعني نضيف علي الزيرو لسه
    }
}, [])


    return (
        <progress id="question-time" value={remainingTime} max={mainTimer} className={mode}/>
    )
}