import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
//import styled from 'styled-components' ;
import axios from 'axios';

const LOCAL_STORAGE_KEY = "token";

function SignIn ({setUser, setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    

    async function handleLogin(event) {
        
        const credentials = {
            username: username,
            password: password
        }
        const URL = "/api/login"
        const result = await axios(URL, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(credentials)
        });
        console.log("result");

        if (result.status === 401) {
            console.log("Fehler")
            //setShowErrorMessage(true)
        } else {
            // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
            const data = await result.json();

            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

            console.log(data)
            
            setToken(data)  

            console.log(username);
            setUser(username)
            // fetch mit POST und Body
        }

        navigate ('/'); 
    }



  

  function Submit (){
    navigate ('/');
  }
  

  return (
  <div>
    <div className='SignupContainer'>
      <p style={{color:"white"}}>E-Mail:</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="E-Mail"> 
      </input>
      <p style={{color:"white"}}>Password:</p>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'> 
      </input>
      
      
      
    </div>
    <div className='SubmitContainer'>
      <Button onClick={handleLogin} className='SubmitButton' variant="contained">Submit</Button>
    </div>
  </div>
  
  )
}
export default SignIn;



