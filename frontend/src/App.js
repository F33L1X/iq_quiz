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
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Scoreboard from './hooks/Scoreboard'

//import Login from './components/login'


//axios ist der weg um mit dem 
//import DenseTable from './components/Scoreboard'   //->Soll angezeigt werden wenn Game gepielt wurde

async function loadQuestions() {
  var config = {
    method: 'get',
    url: '/api/questions',
    headers: {},
  };
  
  const response = await axios(config); 
  //console.log(response)
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
  const [answersRight1, setAnswersRight1] = useState(0);
  const [answersRight2, setAnswersRight2] = useState(0);
  const [answersRight3, setAnswersRight3] = useState(0);
  const [answersRight4, setAnswersRight4] = useState(0);
  const [answersRight5, setAnswersRight5] = useState(0);
  const [answersRight6, setAnswersRight6] = useState(0);
  const [categorieCheck, setCategorieCheck] = useState({Weltraum:false, Natur:false, Geschichte:false, Physik:false, Geografie:false, Menschen:false}); //Hier local storage anwenden
  const [questionCounter, setQuestionCounter] = useState(1);
  const [questPopUp, setQuestPopUp] = useState(false);

  const [user, setUser] = useState();
  const [token, setToken] = useState();
  
  
    

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
              <Route path ="/" element={<WelcomeFeed categorieCheck={categorieCheck} />} /> 
              <Route path ="/categories" element={<CategorieChoose categories={categories} questions={questions} setActiveCategory={setActiveCategory} setQuestionStep={setQuestionStep} categorieCheck={categorieCheck} answersRight1={answersRight1} setAnswersRight1={setAnswersRight1} answersRight2={answersRight2} setAnswersRight2={setAnswersRight2} answersRight3={answersRight3} setAnswersRight3={setAnswersRight3} answersRight4={answersRight4} setAnswersRight4={setAnswersRight4} answersRight5={answersRight5} setAnswersRight5={setAnswersRight5} answersRight6={answersRight6} setAnswersRight6={setAnswersRight6}/>} />
              <Route path ="/quizgame" element={<QuizGame questions={questions} activeCategory={activeCategory} questionStep={questionStep} setQuestionStep={setQuestionStep} answers={answers} setAnswers={setAnswers} categorieCheck={categorieCheck} setCategorieCheck={setCategorieCheck} questionCounter={questionCounter} setQuestionCounter={setQuestionCounter} setQuestPopUp={setQuestPopUp} questPopUp={questPopUp} answersRight1={answersRight1} setAnswersRight1={setAnswersRight1} answersRight2={answersRight2} setAnswersRight2={setAnswersRight2} answersRight3={answersRight3} setAnswersRight3={setAnswersRight3} answersRight4={answersRight4} setAnswersRight4={setAnswersRight4} answersRight5={answersRight5} setAnswersRight5={setAnswersRight5} answersRight6={answersRight6} setAnswersRight6={setAnswersRight6}/>} />
              <Route path ="/SignUp" element={<SignUp setUser={setUser} setToken={setToken}/>} /> 
              <Route path ="/SignIn" element={<SignIn setUser={setUser} setToken={setToken}/>} />
              <Route path ="/scoreboard" element={<Scoreboard />} />
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
