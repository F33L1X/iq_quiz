import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import WelcomeFeed from './components/WelcomeFeed';
import Grid from '@mui/material/Grid';
import axios from 'axios';
//import Categories from './components/Categories';
import { useEffect, useState } from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

async function loadCategories() {

  var config = {
    method: 'get',
    url: '/api/categories',
    headers: { 
    //  'Content-Type': 'application/json'  //zu klären
    },
    
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}




//sm md lg noch definierten
function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories().then(res => {
      setCategories(res)
      console.log (res)
    });
  }, []);

  return(
    <Grid item xs={12} justifyContent="center" alignItems="center" irection="row" container rowSpacing={2} columnSpacing={2}>
      <Grid item xs={12}>  
        <Header ></Header>
      </Grid>
      <Grid item xs={12}>
        <WelcomeFeed></WelcomeFeed>
      </Grid>
      <Grid item xs={2}>
        <Game categories={categories}></Game>
      </Grid>
      <Grid item xs={12}>
        <Footer></Footer>
      </Grid>
    </Grid>
)}
  
export default App;
