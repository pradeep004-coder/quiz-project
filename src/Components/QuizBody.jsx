//score is not working properly
import React from 'react';
import { useState , useEffect} from 'react';
import QuizCard from './QuizCard';
import QuizStart from './quizStart';
import QuizEnd from './quizEnd';
export default function QuizBody(){
    const [num, setNum] = useState(0);  // Track the current question number
    const [skipState, setSkipState] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [selectedQs, setSelectedQs] = useState([]);
    const [count, setCount] = useState(0);
    const [scoreArr, setScoreArr] = useState([]);
    const [selectedOpt, setSelectedOpt] = useState([]);
    const [startQuiz, setStartQuiz] = useState(false)
    const quizObj = quizQuestions[selectedQs[num]];
    
    useEffect(() => {
        fetch('/quizQuestions.json') 
        .then(response => response.json())
        .then((data) => {
            setQuizQuestions(data);
            let tempQSet = new Set([]);
            let totalQuestions = data.length;

            for (let i = 0; tempQSet.size<11; i++) {
                tempQSet.add(Math.floor(Math.random() * totalQuestions));
            }

            setSelectedQs([...tempQSet]);
        })
     }, []); 

    const optClick = (evt) => {
        setSkipState(true);
        setCount(count + 1);
        setSelectedOpt(evt.target.textContent.substring(3).trim());
        document.querySelectorAll('.list-group-item-action').forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    
        evt.target.style.backgroundColor = "#eee";
    };
    
    const nxtClick = () => {
        if (skipState) {
            setScoreArr([...scoreArr,selectedOpt === quizObj.answer ?  1 : 0]);
            setSkipState(false);
            setTimeout(() => {
                setNum(num + 1);
            }, 100);
    
            document.querySelectorAll('.list-group-item-action').forEach(item => {
                item.style.backgroundColor = "transparent"; // Reset to default
            }); 
        }  
    };
    const prevClick = () => {
        if(num>0)
        {
            setNum(num - 1);
            setSkipState(false);
            setScoreArr(scoreArr.slice(0,-1))
        }
    };  
    
    if (quizQuestions.length === 0 || selectedQs.length === 0 || selectedQs[num] === undefined) {
        return <div>Error 404!!</div>;
    }
    return (
        <>
          { !startQuiz ? <QuizStart handleStart = {() => setStartQuiz(true)}/>
           : num<=9 && !(selectedQs[num] === undefined) ? ( <QuizCard 
                QNo={num+1} 
                quizObj={quizObj}
                optClick={optClick}
                nxtClick={nxtClick}
                prevClick={prevClick}
            />)
            : (<QuizEnd score={[...scoreArr,selectedOpt === quizObj.answer ? 1 : 0].filter(item => item===1).length}/>)}
        </>  
    );
}