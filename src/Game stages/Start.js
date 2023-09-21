import React, { useContext } from 'react'
import { QuizContext } from '../App';

function Start() {

  const { game_stage, setGame_stage } = useContext(QuizContext);

  return (
    <div>

      <h1 style={{textAlign:'left'}}>

        The Quiz Contains 10 questions in MCQ format with no negative marking.
      </h1>

      <h2 style={{textAlign:'margin:0 auto'}}>Each Question contains 1 points</h2> <br />
      <button style={{padding:'0.3em 1.3em',border:'2.3px solid grey'}} className='next_button' onClick={() => {
        setGame_stage("ongoing_quiz");
      }}>Start Quiz</button>
    </div>
  );
}


export default Start;
