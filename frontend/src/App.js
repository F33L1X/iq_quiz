import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import WelcomeFeed from './components/WelcomeFeed';
import Grid from '@mui/material/Grid';
import axios from 'axios';
//import Categories from './components/Categories';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategorieChoose from './components/CategorieChoose';

async function loadCategories() {
  var config = {
    method: 'get',
    url: '/api/categories',
    headers: {},
  };
  const response = await axios(config); 
  return response.data;
}

//sm md lg noch definierten
function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories().then(res => {
      setCategories(res)
    });
  }, []);

  return(
    
    <BrowserRouter>
        <Grid item xs={12} justifyContent="center" alignItems="center" irection="row" container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} >  
            <Header></Header>
          </Grid>
          <Grid item xs={12} justifyContent="center" alignItems="center" irection="row" container>
            <Routes>
              <Route path ="/" element={<WelcomeFeed />} />
              <Route path ="/api/categories" element={<CategorieChoose />} />
            </Routes>
          </Grid>
          <Grid item xs={2}>
            <Routes>
              <Route path ="/" element={<Game categories={categories}/>}  />
            </Routes>
          </Grid>
          <Grid item xs={12}>
            <Footer></Footer>
          </Grid>
        </Grid>
      </BrowserRouter>
  
)}
  
export default App;
