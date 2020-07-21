import React from 'react';
import QuizCard from './components/QuestionCard'
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Anime Quiz</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;


// https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple