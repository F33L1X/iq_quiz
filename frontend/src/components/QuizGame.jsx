import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

function QuizGame({questions, activeCategory, questionStep, setQuestionStep, answerA, setAnswerA, answerB, setAnswerB, answerC, setAnswerC, answerD, setAnswerD}) {

  const [question, setQuestion] = useState("");

  // Code von Sebastian - Schau dir an wie es funktioniert und genauso kannst
  // du nun auch die Antworten, etc. anzeigen
  const getQuestion = () => {
    const result = questions.filter(e => e.Kategorie === activeCategory); 
    console.log(questionStep)
    return result[questionStep-1].question;
  }

  // Code von Sebastian
  const getAnswers = () => {
    const resultA = questions.filter(e => e.Kategorie === activeCategory); 
    
    return resultA[questionStep+1].answerA;
  }

  

  useEffect(() => {
    setQuestion(getQuestion());
    //setAnswer(getAnswer());
  }, []);

  return (
    <div>Frage 1/10; 00:01
      <div className='QuizContainer'>
        <div className='GameFrage'>{question}</div>
        <Button className='AntwortLeft' color="secondary" variant="contained">{answerA}</Button>
        <Button className='AntwortRight' color="secondary" variant="contained">{answerB}</Button>
        <Button className='AntwortLeft' color="secondary" variant="contained">{answerC}</Button>
        <Button className='AntwortRight' color="secondary" variant="contained">{answerD}</Button>
      </div>
    </div>
    
  )
}

export default QuizGame
