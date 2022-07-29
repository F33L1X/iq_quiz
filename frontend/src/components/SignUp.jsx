import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
//import {useNavigate} from 'react-router-dom';
//import styled from 'styled-components' ;
import axios from 'axios';

//const LOCAL_STORAGE_KEY = "token";

export default function SignUp ({setUser, setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //const [nickname, setNickname] = useState("")
    //const [showErrorMessage, setShowErrorMessage] = useState(false)


    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "username"){
          setUsername(value);
      }
      if(id === "password"){
          setPassword(value);
      }
    }

    const handleSubmit  = () => {
      axios.post('/api/register', {
        username: username,
        password: password
      }) 
    }

  return (
  <div>
    <div className='SignupContainer'>
      <p style={{color:"white"}}>E-Mail:</p>
      <input  onChange = {(e) => handleInputChange(e)} id="username" placeholder="E-Mail"> 
      </input>
      <p style={{color:"white"}}>Password:</p>
      <input onChange = {(e) => handleInputChange(e)} id="password" placeholder='Password'> 
      </input>
      {/* <p style={{color:"white"}}>Name:</p>
      { <input onChange = {(e) => handleInputChange(e)} id="password" placeholder='nickname'> 
      </input> } */}
    </div>

    <div className='SubmitContainer'>
      <Button onClick={()=>handleSubmit()} className='SubmitButton' variant="contained">Submit</Button>
    </div>
  </div>
  
  )
}



