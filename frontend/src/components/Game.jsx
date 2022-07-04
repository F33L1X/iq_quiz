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
    <div className='Game'><Button variant="contained" onClick={startGame}>Start Game</Button>
    </div>
  )
}

export default Game