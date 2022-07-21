import React from 'react'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


function WelcomeFeed({categorieCheck}) {

  const navigate = useNavigate();

  function Scoreboard (){
    navigate ('/scoreboard');
  }

  return (
    <div className="ScoreContainer">
      <li className='ScoreTitle'>Seid Willkommen im IQ-Quiz!</li>
      <li className='Score'>Gesamtanzahl gespielter Spiele:<span> COUNTER</span></li>
      {categorieCheck.Weltraum===true && categorieCheck.Natur===true && categorieCheck.Geschichte===true && categorieCheck.Physik===true && categorieCheck.Geografie===true && categorieCheck.Menschen===true ? <li className='Score'>Gesamtstatistik: <span><Button variant="contained" onClick={Scoreboard}>Enabled</Button></span></li> : <li className='Score'>Gesamtstatistik: <span><Button disabled variant="contained">Disabled</Button></span></li>}
    </div>
  )
}

export default WelcomeFeed;


//<li className='Score'>Gesamtstatistik: <span><Button disabled variant="contained">Disabled</Button></span></li>