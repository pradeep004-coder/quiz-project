import React from 'react';
export default function QuizEnd(props) {
   
    return(
        <div className='d-flex justify-content-center bg-transparent'>
            <div id='resultBox' className='container d-flex flex-column justify-content-center position-absolute top-50 start-50 translate-middle'>
                <h2 className='bg-transparent text-center text-white text-decoration-underline fs-1'>Result!</h2>
                <div className='resultTxt bg-transparent text-white text-center fs-3'>Toatal Question : 10</div>
                <div className='resultTxt bg-transparent text-white text-center fs-3'>Correct Answers : {props.score}</div>
                <div className='resultTxt bg-transparent text-white text-center fs-3'>Wrong Answers : {10 - props.score}</div>
            </div>
        </div>
    )
}