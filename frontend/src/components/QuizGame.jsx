import React from 'react'

function QuizGame({questions}) {
  console.log ({questions})
  return (
    <div>Frage 1/10; 00:01
      <div className='QuizContainer'>
        <div className='GameFrage'>Wie hoch kann...</div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
      </div>
    </div>
    
  )
}

export default QuizGame