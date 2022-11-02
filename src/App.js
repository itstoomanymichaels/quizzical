import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.css';
import Homepage from "./components/Homepage"
import Question from "./components/Questions"

function App() {
  const [start, setStart] = useState(false)
  const [quiz, setQuiz] = useState([])


  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json())
    .then(data => setQuiz(data.results))
  }, [])

  function showQuestions() {
    setStart(prevStart => !prevStart)
  }
  console.log(quiz) 

  const questions = quiz.map(someQuestion => {
    return (
      <Question 
        key = {nanoid()}
        question = {someQuestion.question}
        rightAnswer = {someQuestion.correct_answer}
        wrongAnswers = {someQuestion.incorrect_answers}
      />
    )
  })

  return (
    <div className="App">
      {!start && <Homepage startButton={showQuestions}/>}
      {start && questions}
    </div>
  );
}

export default App;
