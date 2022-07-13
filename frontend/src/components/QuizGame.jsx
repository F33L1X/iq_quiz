import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

function QuizGame({questions, activeCategory, questionStep, setQuestionStep, answers, setAnswers}) {

  const [question, setQuestion] = useState("");

  // Code von Sebastian - Schau dir an wie es funktioniert und genauso kannst
  // du nun auch die Antworten, etc. anzeigen
  const getQuestion = () => {
    if (questionStep !== -1) {
      const result = questions.filter(e => e.Kategorie === activeCategory); 
      console.log(questionStep)
      return result[questionStep].question; 
    } else return null;
  }

  // Code von Sebastian

  const getAnswers = () => {
    if (questionStep !== -1) {
      const result = questions.filter(e => e.Kategorie === activeCategory); 

      console.log(activeCategory)
      console.log(result)
      
      return [
        result[questionStep].answerA,
        result[questionStep].answerB,
        result[questionStep].answerC,
        result[questionStep].answerD
      ];
    } else return null;
  }

  const nextQuestion = (korrekt) => {
    if (korrekt === true) console.log("Die Antwort war richtig")
  }

  

  useEffect(() => {
    console.log(questionStep)
    setQuestionStep(questionStep+1);
      setQuestion(getQuestion());
      setAnswers(getAnswers());
  }, []);

  return (
    <div>Frage 1/10; 00:01
      <div className='QuizContainer'>
        <div className='GameFrage'>{question}</div>
        <Button className='AntwortLeft' color="secondary" variant="contained" onClick={() => nextQuestion(true)}>{answers[0]}</Button>
        <Button className='AntwortRight' color="secondary" variant="contained" onClick={() => nextQuestion(true)}>{answers[1]}</Button>
        <Button className='AntwortLeft' color="secondary" variant="contained" onClick={() => nextQuestion(true)}>{answers[2]}</Button>
        <Button className='AntwortRight' color="secondary" variant="contained" onClick={() => nextQuestion(true)}>{answers[3]}</Button>
      </div>
    </div>
    
  )
}

export default QuizGame
