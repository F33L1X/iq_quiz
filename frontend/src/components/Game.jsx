import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';

function Game({categories}) {

  function startGame() {    //axios 
    console.log(categories)
  }

  return (
    <div className='Game'><Button variant="contained" onClick={startGame}>Start Game</Button>
    </div>
  )
}

export default Game