import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function Signup (){

  const navigate = useNavigate();

  function Submit (){
    navigate ('/');
  }

  return (
  <div>
    <div className='SignupContainer'>
      <p style={{color:"white"}}>E-Mail:</p>
      <input placeholder="E-Mail"> 
      </input>
      <p style={{color:"white"}}>Password:</p>
      <input placeholder="Password"> 
      </input>
      <p style={{color:"white"}}>Name:</p>
      <input placeholder="Name"> 
      </input>
      
      
      
    </div>
    <div className='SubmitContainer'>
      <Button className='SubmitButton' variant="contained" onClick={Submit}>Submit</Button>
    </div>
  </div>
  
  )
}