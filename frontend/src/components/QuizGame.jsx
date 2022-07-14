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

      //console.log(activeCategory)
      //console.log("here",result)
      
      return [
        result[questionStep].answerA,
        result[questionStep].answerB,
        result[questionStep].answerC,
        result[questionStep].answerD
      ];
    } else return null;
  }

  const nextQuestion = (korrekt) => {
    if (korrekt === true) 
    console.log("Die Antwort war richtig")
    setQuestionStep=questionStep+1
    getQuestion ()

    //questionsteo hochsetzten
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
        <Button className='AntwortLeft' color="secondary" variant="contained" onClick={() => nextQuestion(answers[0].rightAnswer)}>{answers[0]?.answer}</Button> 
        <Button className='AntwortRight' color="secondary" variant="contained" onClick={() => nextQuestion(answers[1].rightAnswer)}>{answers[1]?.answer}</Button>
        <Button className='AntwortLeft' color="secondary" variant="contained" onClick={() => nextQuestion(answers[2].rightAnswer)}>{answers[2]?.answer}</Button>
        <Button className='AntwortRight' color="secondary" variant="contained" onClick={() => nextQuestion(answers[3].rightAnswer)}>{answers[3]?.answer}</Button>
      </div>
    </div>
    //? ->wenn key vorhanden benutze wie gehabt, wenn nicht vorhanden ignoriere die gesamte Zeile (kein error) 
    //next step: neuer state "punkte", dann jump zur next question
    )
}

export default QuizGame
