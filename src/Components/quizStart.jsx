import React from 'react';

export default function QuizStart(props){
    return(
        <div id='startBox' className='d-flex justify-content-center'>
            <div className='d-flex  flex-column justify-content-center'>
                <h2 id='logo' className='text-white fw-bold'>GkHit</h2>
                <button id='startBtn' className='btn btn-success justify-self-centerfw-bold' onClick={props.handleStart}>START</button>
            </div>
        </div>
    )
}