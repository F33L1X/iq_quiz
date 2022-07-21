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
import AlertDialog from  '../hooks/AlertDialog'
//import { accordionActionsClasses } from '@mui/material';

//mit Sebastian questions
function CategorieChoose({setActiveCategory, setQuestionStep, categorieCheck, answersRight1, answersRight2, answersRight3, answersRight4, answersRight5, answersRight6}) {


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
  <div className='Alert'>{categorieCheck.Weltraum===true && categorieCheck.Natur===true && categorieCheck.Geschichte===true && categorieCheck.Physik===true && categorieCheck.Geografie===true && categorieCheck.Menschen===true ? <AlertDialog></AlertDialog> : null}
    <div className="CategorieChoose">
      {categorieCheck.Weltraum===false ? <div  className="box" style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}  onClick={QuizGameWeltraum}><p className="InnerText">Weltall</p></div> : null}
      {categorieCheck.Weltraum===true ? <div  className="boxDead" style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >{answersRight1 < 4 ? <p className="InnerText1">{answersRight1*10}%</p> : null}{answersRight1 > 4 && answersRight1 < 8 ? <p className="InnerText2">{answersRight1*10}%</p> : null}{answersRight1 > 7 ? <p className="InnerText3">{answersRight1*10}%</p> : null}</div> : null}
      {categorieCheck.Natur===false ? <div className="box" style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameNature}><p className="InnerText">Natur</p></div> : null}
      {categorieCheck.Natur===true ? <div className="boxDead" style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >{answersRight2 < 4 ? <p className="InnerText1">{answersRight2*10}%</p> : null}{answersRight2 > 4 && answersRight2 < 8 ? <p className="InnerText2">{answersRight2*10}%</p> : null}{answersRight2 > 7 ? <p className="InnerText3">{answersRight2*10}%</p> : null}</div> : null}
      {categorieCheck.Geschichte===false ? <div className="box"style={{ backgroundImage:`url(${image3})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameHistory}><p className="InnerText">Geschichte</p></div> : null}
      {categorieCheck.Geschichte===true ? <div className="boxDead"style={{ backgroundImage:`url(${image3})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >{answersRight3 < 4 ? <p className="InnerText1">{answersRight3*10}%</p> : null}{answersRight3 > 4 && answersRight3 < 8 ? <p className="InnerText2">{answersRight3*10}%</p> : null}{answersRight3 > 7 ? <p className="InnerText3">{answersRight3*10}%</p> : null}</div> : null}
      {categorieCheck.Physik===false ? <div className="box"style={{ backgroundImage:`url(${image4})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGamePhysik}><p className="InnerText">Physik</p></div> : null}
      {categorieCheck.Physik===true ? <div className="boxDead"style={{ backgroundImage:`url(${image4})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >{answersRight4 < 4 ? <p className="InnerText1">{answersRight4*10}%</p> : null}{answersRight4 > 4 && answersRight4 < 8 ? <p className="InnerText2">{answersRight4*10}%</p> : null}{answersRight4 > 7 ? <p className="InnerText3">{answersRight4*10}%</p> : null}</div> : null}
      {categorieCheck.Geografie===false ? <div className="box"style={{ backgroundImage:`url(${image5})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameGeografie}><p className="InnerText">Geografie</p></div> : null}
      {categorieCheck.Geografie===true ? <div className="boxDead"style={{ backgroundImage:`url(${image5})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>{answersRight5 < 4 ? <p className="InnerText1">{answersRight5*10}%</p> : null}{answersRight5 > 4 && answersRight5 < 8 ? <p className="InnerText2">{answersRight5*10}%</p> : null}{answersRight5 > 7 ? <p className="InnerText3">{answersRight5*10}%</p> : null}</div> : null}
      {categorieCheck.Menschen===false ? <div className="box"style={{ backgroundImage:`url(${image6})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}} onClick={QuizGameMenschen}><p className="InnerText">Menschen</p></div> : null}
      {categorieCheck.Menschen===true ? <div className="boxDead"style={{ backgroundImage:`url(${image6})`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>{answersRight6 < 4 ? <p className="InnerText1">{answersRight6*10}%</p> : null}{answersRight6 > 4 && answersRight6 < 8 ? <p className="InnerText2">{answersRight6*10}%</p> : null}{answersRight6 > 7 ? <p className="InnerText3">{answersRight6*10}%</p> : null}</div> : null}
    </div>
  </div>
  )
}
export default CategorieChoose;