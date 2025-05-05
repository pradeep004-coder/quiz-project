import React from 'react';

export default function QuizCard(props) {
  
  const quizObj = props.quizObj ;
  
  return (
    <div className='quizCard d-flex justify-content-center mt-sm-4'>
        <div id="QNoBlock" className="QNoBlock container bg-dark mt-5">
          {/*     Question Box     */}
          <div className="row justify-content-center ">
            <div className="text-center">
              <div className="alert text-white">
                <strong>Question: {props.QNo} of 10</strong>
              </div>
            </div>
          </div>
          {/*       Question      */}
          <div id="QBlock" className="row justify-content-center mb-4" >
            <div>
              <div className="card bg-transparent">
                <div id='quest' className="card-body text-light" >
                  <h5 className="card-title">
                    {quizObj.quest}
                  </h5>
                </div>
              </div>
            </div>
           </div>
            {/*       Options      */}
           <div className="row justify-content-center mb-4">
              <div className="col-12">
                <div className="list-group">
                    <button className="list-group-item list-group-item-action" onClick={props.optClick}>a) {quizObj.options[0]} </button>
                    <button className="list-group-item list-group-item-action" onClick={props.optClick}>b) {quizObj.options[1]}</button>
                    <button className="list-group-item list-group-item-action" onClick={props.optClick}>c) {quizObj.options[2]}</button>
                    <button className="list-group-item list-group-item-action" onClick={props.optClick}>d) {quizObj.options[3]}</button>
                </div>
              </div>
            </div>
            {/*       Buttons      */}
            <div className="row justify-content-center">
              <div className="col-md-8 d-flex justify-content-between">
                <button className={`btn btn-${props.QNo===1? "secondary" : "primary"}`} onClick={props.prevClick}>
                  Previous
                </button>
                {/* <button className="btn btn-white">{quizObj.answer}</button> */}
                <button id='nxtBtn' className="nxtBtn btn btn-primary" onClick={props.nxtClick}>
                 {props.QNo<10 ? "Next" : "See Result"}
                </button>
              </div>
            </div>
        </div>
      </div>
  );
}
