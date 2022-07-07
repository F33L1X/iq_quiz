import React from 'react'
import { useState, useEffect } from "react";


function QuizGame({questions, activeCategory, questionStep, setQuestionStep}) {

  const [question, setQuestion] = useState("");


  
  useEffect(() => {
    const result = questions.filter(e => e.Kategorie === activeCategory); 
    console.log("hier", result[questionStep+1].question)         //geschweifte klammern nur bei return
    setQuestion(result[questionStep+1].question)
  })

  return (
    <div>Frage 1/10; 00:01
      <div className='QuizContainer'>
        <div className='GameFrage'></div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
      </div>
    </div>
    
  )
}

export default QuizGame