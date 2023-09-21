import React, { useContext } from 'react';
import { QuizContext } from '../App.js';


function End_quiz() {
    const { quizScore } = useContext(QuizContext);
    return (
        <div className='your_result'>
            <h1>End of the Quiz</h1>
            <h2>Your Score: {quizScore}/10 </h2>
            <br />

            <button className='next_button' onClick={()=>{
                window.location.reload();
            }}>Restart Quiz</button>
        </div>
    )
}

export default End_quiz;
