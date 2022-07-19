import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import CategorieChoose from './CategorieChoose';

function QuizGame({questions, activeCategory, questionStep, setQuestionStep, answers, setAnswers, answersRight, setAnswersRight, categorieCheck, setCategorieCheck, questionCounter, setQuestionCounter}) {

  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  // Code von Sebastian - Schau dir an wie es funktioniert und genauso kannst
  // du nun auch die Antworten, etc. anzeigen
  const getQuestion = () => {
    if (questionStep !== -1 && questionStep < 10) {
      const result = questions.filter(e => e.Kategorie === activeCategory); 
      //console.log(questionStep)
      return result[questionStep].question; 
    } else return null;
  }

  // Code von Sebastian

  const getAnswers = () => {
    if (questionStep !== -1 && questionStep < 10) {
      const result = questions.filter(e => e.Kategorie === activeCategory); 

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
    if (questionStep < 10) {
      if (korrekt === true) {
      //console.log("Die Antwort war richtig")
      setQuestionStep (questionStep+1);
      setAnswersRight (answersRight+1)
      setQuestionCounter (questionCounter+1)

      } else {
      //console.log("Die Antwort war falsch")
      setQuestionStep(questionStep+1);
      setQuestionCounter (questionCounter+1)
      }
    }

    if (questionStep == 9) {
    setQuestionStep(-1)
    setQuestionCounter(0)
    if (activeCategory === "Weltraum") {
      //console.log(activeCategory)
    //setCategorieCheck({Weltraum:true, Natur:false, Geschichte:false, Physik:false, Geografie:false, Menschen:false})
    setCategorieCheck({...categorieCheck, Weltraum: true}) 

    } else if (activeCategory === "Natur") {
      //console.log(activeCategory)
    //setCategorieCheck({Weltraum:false, Natur:true, Geschichte:false, Physik:false, Geografie:false, Menschen:false})
    setCategorieCheck({...categorieCheck, Natur: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
    
    } else if (activeCategory === "Geschichte") {
      //console.log(activeCategory)
    //setCategorieCheck({Weltraum:false, Natur:true, Geschichte:false, Physik:false, Geografie:false, Menschen:false})
    setCategorieCheck({...categorieCheck, Geschichte: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
    
    }
    else if (activeCategory === "Physik") {
      //console.log(activeCategory)
    //setCategorieCheck({Weltraum:false, Natur:true, Geschichte:false, Physik:false, Geografie:false, Menschen:false})
    setCategorieCheck({...categorieCheck, Physik: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
   
    }
    else if (activeCategory === "Geografie") {
      //console.log(activeCategory)
    //setCategorieCheck({Weltraum:false, Natur:true, Geschichte:false, Physik:false, Geografie:false, Menschen:false})
    setCategorieCheck({...categorieCheck, Geografie: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
  
    }
    else if (activeCategory === "Menschen") {
      //console.log(activeCategory)
    //setCategorieCheck({Weltraum:false, Natur:true, Geschichte:false, Physik:false, Geografie:false, Menschen:false})
    setCategorieCheck({...categorieCheck, Menschen: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
    
    }
    navigate ('/categories');
  } 
  }

  useEffect(() => {
    console.log(questionStep)
    setQuestionStep(questionStep);
      setQuestion(getQuestion());
      setAnswers(getAnswers());
  }, []);

  useEffect (() =>{
    setQuestion(getQuestion());
    setAnswers(getAnswers());
  }, [questionStep])

  return (
    <div>
      <div className="QuoteContainer">
      <div className="Quote">Frage {questionCounter}/10; 00:01</div>
      
      </div>

        <div className='QuizContainer'>
        <div className='GameFrage'>{question}</div>
          {answers ? <Button style={{backgroundColor: "#aab369",padding: "10px 1px",fontSize: "14px",textTransform: 'none'}} className='AntwortLeft' color="secondary" variant="contained" onClick={() => nextQuestion(answers[0]?.rightAnswer)}>{answers[0]?.answer}</Button> : null} 
          {answers ?<Button style={{backgroundColor: "#aab369",padding: "10px 1px",fontSize: "14px",textTransform: 'none'}} className='AntwortRight' color="secondary" variant="contained" onClick={() => nextQuestion(answers[1]?.rightAnswer)}>{answers[1]?.answer}</Button> : null}
          {answers ?<Button style={{backgroundColor: "#aab369",padding: "10px 1px",fontSize: "14px",textTransform: 'none'}} className='AntwortLeft' color="secondary" variant="contained" onClick={() => nextQuestion(answers[2]?.rightAnswer)}>{answers[2]?.answer}</Button> : null}
          {answers ?<Button style={{backgroundColor: "#aab369",padding: "10px 1px",fontSize: "14px",textTransform: 'none'}} className='AntwortRight' color="secondary" variant="contained" onClick={() => nextQuestion(answers[3]?.rightAnswer)}>{answers[3]?.answer}</Button> : null}
        </div>
    </div>
    //? ->wenn key vorhanden benutze wie gehabt, wenn nicht vorhanden ignoriere die gesamte Zeile (kein error) 
    //next step: neuer state "punkte", dann jump zur next question
    // ? ist if und : ist else
    )
}

export default QuizGame
