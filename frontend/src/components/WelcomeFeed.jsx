import React from 'react'


function WelcomeFeed() {
  return (
    <div className="ScoreContainer">
      <li className='ScoreTitle'>Scoreboard:</li>
      <li className='Score'>Gesamtanzahl gespielter Spiele:<span>COUNTER</span></li>
      <li className='Score'>Für Gesamtstatistik das Spiel beenden: <span>BUTTON</span></li>
    </div>
  )
}

export default WelcomeFeed;