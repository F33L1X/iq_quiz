import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import WelcomeFeed from './components/WelcomeFeed';
import Grid from '@mui/material/Grid';



function App() {
  return(

  <Grid item xs={12} justifyContent="center" alignItems="center" irection="row" container rowSpacing={2} columnSpacing={2}>
    <Grid item xs={12}>
      <Header ></Header>
    </Grid>
    <Grid item xs={12}>
      <WelcomeFeed ></WelcomeFeed>
    </Grid>
    <Grid item xs={2}>
      <Game></Game>
    </Grid>
    <Grid item xs={12}>
      <Footer></Footer>
    </Grid>
  </Grid>
  )}
  
  export default App;
