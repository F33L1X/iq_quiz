import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



function Game({categories}) {

  const navigate = useNavigate();

  function startGame() {    //axios 
    console.log(categories)
    navigate ('/api/categories');
    
  }

  return (
    <div className="StartArea">
      <div className="GameNote">Es gibt nur einen Durchlauf pro Spieler!</div>
      <div className='GameButton'><Button variant="contained" onClick={startGame}>Start Game</Button>
      </div>
    </div>
  )
}

export default Game