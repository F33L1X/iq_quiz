import React from 'react'

function QuizGame({questions},{check}) {
  
  
 const result = questions.filter(e => e.Kategorie === "Weltraum");

 console.log ("HERE2", result)


  return (
    <div>Frage 1/10; 00:01
      <div className='QuizContainer'>
        <div className='GameFrage'></div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
        <div className='AntwortLeft'>Antwort</div>
        <div className='AntwortRight'>Antwort</div>
      </div>
    </div>
    
  )
}

export default QuizGame