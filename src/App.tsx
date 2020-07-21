import React from 'react';

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
      
    </div>
  );
}

export default App;


// https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple