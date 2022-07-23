import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

export default function SignIn (){

  const navigate = useNavigate();

  function Submit (){
    navigate ('/');
  }

  return (
  <div>
    <div className='SignupContainer' style={{height:"170px"}}>
      <p style={{color:"white"}}>E-Mail:</p>
      <input placeholder="E-Mail"> 
      </input>
      <p style={{color:"white"}}>Password:</p>
      <input placeholder="Password"> 
      </input>
    </div>
    <div className='SubmitContainer'>
      <Button className='SubmitButton' variant="contained" onClick={Submit}>Login</Button>
    </div>
  </div>
  
  )
}