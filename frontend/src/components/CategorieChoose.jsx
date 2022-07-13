import React from 'react'
import { useState } from "react";
//import {useNavigate} from 'react-router-dom';
import image1 from "../imgs/Weltall.jpg";
import image2 from "../imgs/Nature.jpg";
import image3 from "../imgs/History.jpg";
import image4 from "../imgs/Physik.jpg";
import image5 from "../imgs/Geografie.jpg";
import image6 from "../imgs/Menschen.jpg";
import {useNavigate} from 'react-router-dom';

//mit Sebastian questions
function CategorieChoose({setActiveCategory, setQuestionStep}) {

  const navigate = useNavigate();

  function QuizGameWeltraum () {
    setActiveCategory("Weltraum");
    setQuestionStep(0);
    navigate ('/quizgame');
  }
  function QuizGameNature () {
    setActiveCategory("Natur");
    setQuestionStep(0);
    navigate ('/quizgame');
  }
  function QuizGameHistory () {
    setActiveCategory("Geschichte");
    setQuestionStep(0);
    navigate ('/quizgame');
  }
  function QuizGamePhysik () {
    setActiveCategory("Physik");
    setQuestionStep(0);
    navigate ('/quizgame'); 
  }
  function QuizGameGeografie () {
    setActiveCategory("Geografie");
    setQuestionStep(0);
    navigate ('/quizgame'); 
  }
  function QuizGameMenschen () {
    setActiveCategory("Menschen");
    setQuestionStep(0);
    navigate ('/quizgame');
  }



  return (
    
    <div className="CategorieChoose">
      <div className="box" style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}  onClick={QuizGameWeltraum}><p className="InnerText">Weltall</p></div>
      <div className="box" style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameNature}><p className="InnerText">Natur</p></div>
      <div className="box"style={{ backgroundImage:`url(${image3})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameHistory}><p className="InnerText">Geschichte</p></div>
      <div className="box"style={{ backgroundImage:`url(${image4})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGamePhysik}><p className="InnerText">Physik</p></div>
      <div className="box"style={{ backgroundImage:`url(${image5})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameGeografie}><p className="InnerText">Geografie</p></div>
      <div className="box"style={{ backgroundImage:`url(${image6})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameMenschen}><p className="InnerText">Menschen</p></div>
    </div>
  )
}
export default CategorieChoose;