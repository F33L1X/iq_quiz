import React from 'react'
import { useEffect } from "react";
//import {useNavigate} from 'react-router-dom';
import image1 from "../imgs/Weltall.jpg";
import image2 from "../imgs/Nature.jpg";
import image3 from "../imgs/History.jpg";
import image4 from "../imgs/Physik.jpg";
import image5 from "../imgs/Geografie.jpg";
import image6 from "../imgs/Menschen.jpg";
import {useNavigate} from 'react-router-dom';
//import { accordionActionsClasses } from '@mui/material';

//mit Sebastian questions
function CategorieChoose({setActiveCategory, setQuestionStep, categorieCheck}) {

  const navigate = useNavigate();
  
  function QuizGameWeltraum () {
    if (categorieCheck.Weltraum===false){
    setActiveCategory("Weltraum");
    setQuestionStep(0);
    navigate ('/quizgame');
  
  }
  }
  function QuizGameNature () {
    if (categorieCheck.Natur===false){
    setActiveCategory("Natur");
    setQuestionStep(0);
    navigate ('/quizgame');
  }
  }
  function QuizGameHistory () {
    if (categorieCheck.Geschichte===false){
    setActiveCategory("Geschichte");
    setQuestionStep(0);
    navigate ('/quizgame');
  }
  }
  function QuizGamePhysik () {
    if (categorieCheck.Physik===false){
    setActiveCategory("Physik");
    setQuestionStep(0);
    navigate ('/quizgame'); 
  }
  }
  function QuizGameGeografie () {
    if (categorieCheck.Geografie===false){
    setActiveCategory("Geografie");
    setQuestionStep(0);
    navigate ('/quizgame'); 
  }
  }
  function QuizGameMenschen () {
    if (categorieCheck.Menschen===false){
    setActiveCategory("Menschen");
    setQuestionStep(0);
    navigate ('/quizgame');
  }
  }
  



  return (
    
    <div className="CategorieChoose">
      {categorieCheck.Weltraum===false ? <div  className="box" style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}  onClick={QuizGameWeltraum}><p className="InnerText">Weltall</p></div> : null}
      {categorieCheck.Weltraum===true ? <div  className="boxDead" style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} ><p className="InnerText">Weltall</p></div> : null}
      {categorieCheck.Natur===false ? <div className="box" style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameNature}><p className="InnerText">Natur</p></div> : null}
      {categorieCheck.Natur===true ? <div className="boxDead" style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} ><p className="InnerText">Natur</p></div> : null}
      {categorieCheck.Geschichte===false ? <div className="box"style={{ backgroundImage:`url(${image3})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameHistory}><p className="InnerText">Geschichte</p></div> : null}
      {categorieCheck.Geschichte===true ? <div className="boxDead"style={{ backgroundImage:`url(${image3})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} ><p className="InnerText">Geschichte</p></div> : null}
      {categorieCheck.Physik===false ? <div className="box"style={{ backgroundImage:`url(${image4})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGamePhysik}><p className="InnerText">Physik</p></div> : null}
      {categorieCheck.Physik===true ? <div className="boxDead"style={{ backgroundImage:`url(${image4})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} ><p className="InnerText">Physik</p></div> : null}
      {categorieCheck.Geografie===false ? <div className="box"style={{ backgroundImage:`url(${image5})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameGeografie}><p className="InnerText">Geografie</p></div> : null}
      {categorieCheck.Geografie===true ? <div className="boxDead"style={{ backgroundImage:`url(${image5})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}><p className="InnerText">Geografie</p></div> : null}
      {categorieCheck.Menschen===false ? <div className="box"style={{ backgroundImage:`url(${image6})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameMenschen}><p className="InnerText">Menschen</p></div> : null}
      {categorieCheck.Menschen===true ? <div className="boxDead"style={{ backgroundImage:`url(${image6})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}><p className="InnerText">Menschen</p></div> : null}
    </div>
  )
}
export default CategorieChoose;