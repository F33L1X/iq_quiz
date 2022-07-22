import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import CategorieChoose from './CategorieChoose';


function QuizGame({questions, activeCategory, questionStep, setQuestionStep, answers, setAnswers, categorieCheck, setCategorieCheck, questionCounter, setQuestionCounter, setQuestPopUp, questPopUp, answersRight1, setAnswersRight1, answersRight2, setAnswersRight2, answersRight3, setAnswersRight3, answersRight4, setAnswersRight4, answersRight5, setAnswersRight5, answersRight6, setAnswersRight6}) {
  
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
      if (korrekt === true && activeCategory==="Weltraum") {
      //console.log("Die Antwort war richtig")
      setQuestionStep (questionStep+1);
      setAnswersRight1 (answersRight1+1)
      setQuestionCounter (questionCounter+1)
      setQuestPopUp(false)
      }
      else if (korrekt === true && activeCategory==="Natur") {
        //console.log("Die Antwort war richtig")
        setQuestionStep (questionStep+1);
        setAnswersRight2 (answersRight2+1)
        setQuestionCounter (questionCounter+1)
        setQuestPopUp(false) 
      }
      else if (korrekt === true && activeCategory==="Geschichte") {
        //console.log("Die Antwort war richtig")
        setQuestionStep (questionStep+1);
        setAnswersRight3 (answersRight3+1)
        setQuestionCounter (questionCounter+1)
        setQuestPopUp(false)  
      }
      else if (korrekt === true && activeCategory==="Physik") {
        //console.log("Die Antwort war richtig")
        setQuestionStep (questionStep+1);
        setAnswersRight4 (answersRight4+1)
        setQuestionCounter (questionCounter+1)
        setQuestPopUp(false)
      }
      else if (korrekt === true && activeCategory==="Geografie") {
        //console.log("Die Antwort war richtig")
        setQuestionStep (questionStep+1);
        setAnswersRight5 (answersRight5+1)
        setQuestionCounter (questionCounter+1)
        setQuestPopUp(false) 
      }
      else if (korrekt === true && activeCategory==="Menschen") {
        //console.log("Die Antwort war richtig")
        setQuestionStep (questionStep+1);
        setAnswersRight6 (answersRight6+1)
        setQuestionCounter (questionCounter+1)
        setQuestPopUp(false) 
      } 
      else {
      //console.log("Die Antwort war falsch")
      setQuestionStep(questionStep+1);
      setQuestionCounter(questionCounter+1)
      setQuestPopUp(true)
      }
    }
    }

    if (questionStep == 10) {
    setQuestionStep(-1)
    setQuestionCounter(1)
    if (activeCategory === "Weltraum") {
    setCategorieCheck({...categorieCheck, Weltraum: true})
    //localStorage.setItem('Weltraum', 'true');
    } else if (activeCategory === "Natur") {
    setCategorieCheck({...categorieCheck, Natur: true}) 
    } else if (activeCategory === "Geschichte") {
    setCategorieCheck({...categorieCheck, Geschichte: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
    }
    else if (activeCategory === "Physik") {
    setCategorieCheck({...categorieCheck, Physik: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
    }
    else if (activeCategory === "Geografie") {
    setCategorieCheck({...categorieCheck, Geografie: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
    }
    else if (activeCategory === "Menschen") {
    setCategorieCheck({...categorieCheck, Menschen: true}) //destructuring googlen/slack -> "{}"","der Rest", "das andere" -> neues Objeckt
    }
    navigate ('/categories');
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
          <div className='PopUpContainer'>
            {questPopUp===true && questionStep>0 ?<p className="PopUp" style={{color:"red"}}>🤷‍♂️ Wrong !</p> :null}
            {questPopUp===false && questionStep>0 ?<p className="PopUp" style={{color:"green"}}>🎊 Right !</p> :null}
          </div>
    </div>
    //? ->wenn key vorhanden benutze wie gehabt, wenn nicht vorhanden ignoriere die gesamte Zeile (kein error) 
    //next step: neuer state "punkte", dann jump zur next question
    // ? ist if und : ist else
    )
}

export default QuizGame;
