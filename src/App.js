import { useState, createContext } from 'react';
import './App.css';
import Start from './Game stages/Start';
import Ongoing_quiz from './Game stages/Ongoing_quiz';
import End_quiz from './Game stages/End_quiz';

export const QuizContext = createContext();

function App() {

  const [game_stage, setGame_stage] = useState('start_quiz');
  const [quizScore, setQuizScore] = useState(0);

  return (

    <div className="App">


      <QuizContext.Provider value={{ game_stage, setGame_stage, quizScore, setQuizScore }}>

        {game_stage == "start_quiz" && <Start />}
        {game_stage == "ongoing_quiz" && <Ongoing_quiz />}
        {game_stage == "end_quiz" && <End_quiz />}

      </QuizContext.Provider>

    </div>
  );
}

export default App;
