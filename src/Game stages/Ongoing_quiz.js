import React, { useState, useContext, createContext } from 'react'
import { questions } from '../QuestionBank.js';
import { QuizContext } from '../App.js';


function Ongoing_quiz() {

  const { setGame_stage, quizScore, setQuizScore } = useContext(QuizContext);

  const [current_question, setCurrent_question] = useState(0);
  const [option_chosen, setOption_chosen] = useState("");
  // const [quizScore, setQuizScore] = useState(0);

  return (
    <div>
      {/* <QuizScoreSharing.Provider value={{ quizScore }}> */}
        <h1>
          {questions[current_question].question}
        </h1>
        <div className='option_list'>
          <button onClick={() =>
            setOption_chosen("A")
          }>{questions[current_question].OptionA}</button>

          <button onClick={() =>
            setOption_chosen("B")
          }>{questions[current_question].OptionB}</button>

          <button onClick={() => setOption_chosen("C")
          }>{questions[current_question].OptionC}</button>

          <button onClick={() =>
            setOption_chosen("D")
          }>{questions[current_question].OptionD}</button>

        </div>


        {current_question == questions.length - 1 ? <button className='next_button' onClick={() => {
         
         if (questions[current_question].Answer == option_chosen) {
          setQuizScore(quizScore + 1);
        }
         setTimeout(() => {
          setGame_stage('end_quiz');

          }, 1000);
        }}>Submit Answers</button> :
          <button className='next_button' onClick={() => {

            if (questions[current_question].Answer == option_chosen) {
              setQuizScore(quizScore + 1);
            }

            setCurrent_question(current_question + 1);

          }}>Next Question</button>}
      {/* </QuizScoreSharing.Provider> */}
    </div>
  );
}

export default Ongoing_quiz;
