import React from 'react'
import { useState, useEffect } from "react";


function QuizGame({questions, activeCategory, questionStep, setQuestionStep}) {

  const [question, setQuestion] = useState("");

  // Code von Sebastian - Schau dir an wie es funktioniert und genauso kannst
  // du nun auch die Antworten, etc. anzeigen
  const getQuestion = () => {
    const result = questions.filter(e => e.Kategorie === activeCategory); 
    console.log(questions, activeCategory, questionStep, result)
    return result[questionStep+1].question;
  }

  useEffect(() => {
    setQuestion(getQuestion());
  }, []);
  // Code von Sebastian

  return (
    <div>Frage 1/10; 00:01
      <div className='QuizContainer'>
        <div className='GameFrage'>{question}</div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
      </div>
    </div>
    
  )
}

export default QuizGame