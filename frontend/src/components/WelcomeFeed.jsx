import React from 'react'
import Button from '@mui/material/Button';


function WelcomeFeed() {
  return (
    <div className="ScoreContainer">
      <li className='ScoreTitle'>Seid Willkommen im IQ-Quiz!</li>
      <li className='Score'>Gesamtanzahl gespielter Spiele:<span> COUNTER</span></li>
      <li className='Score'>Gesamtstatistik: <span><Button disabled variant="contained">Disabled</Button></span></li>
    </div>
  )
}

export default WelcomeFeed;
