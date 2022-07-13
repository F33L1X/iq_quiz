import './App.css';
import Footer from './components/Footer';
import GameStart from './components/GameStart';
import WelcomeFeed from './components/WelcomeFeed';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategorieChoose from './components/CategorieChoose';
import Navbar from './components/NavBar'
import QuizGame from './components/QuizGame'
//import DenseTable from './components/Scoreboard'   //->Soll angezeigt werden wenn Game gepielt wurde

async function loadQuestions() {
  var config = {
    method: 'get',
    url: '/api/questions',
    headers: {},
  };
  const response = await axios(config); 
  return response.data;
}



async function loadCategories() {
  var config = {
    method: 'get',
    url: '/api/categories',
    headers: {},
  };
  const response = await axios(config); 
  return response.data;
}
//async function für questions
//sm md lg noch definierten
function App() {

  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);   //mit Sebastian
  const [activeCategory, setActiveCategory] = useState("");
  const [questionStep, setQuestionStep] = useState(-1);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    loadCategories().then(res => {
      setCategories(res)
    });
    loadQuestions().then(res => {
      setQuestions(res)
    });
  }, []);

  return(
    
    <BrowserRouter>
        <Grid item xs={12} justifyContent="center" alignItems="center" irection="row" container rowSpacing={10} columnSpacing={2}>
          <Grid item xs={12} >  
            <Navbar></Navbar>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} justifyContent="center" alignItems="center" irection="row" container rowSpacing={0} columnSpacing={0} >
            <Routes>
              <Route path ="/" element={<WelcomeFeed />} /> 
              <Route path ="/categories" element={<CategorieChoose categories={categories} questions={questions} setActiveCategory={setActiveCategory} setQuestionStep={setQuestionStep} />} />
              <Route path ="/quizgame" element={<QuizGame questions={questions} activeCategory={activeCategory} questionStep={questionStep} setQuestionStep={setQuestionStep} answers={answers} setAnswers={setAnswers}/>} />
            </Routes>
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route path ="/" element={<GameStart categories={categories} />}  />
            </Routes>
          </Grid>
          <Grid item xs={12} rowSpacing={10}>
            <Footer></Footer>
          </Grid>
        </Grid>
      </BrowserRouter>
  
)}
  
export default App;
