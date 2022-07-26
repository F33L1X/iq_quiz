import React, {useState} from 'react' ;
import styled from 'styled-components' ;
import axios from 'axios';
//import { useAppContext } from '../appContext'


const LOCAL_STORAGE_KEY = "token";

function Login({setUser, setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    

    async function handleLogin(event) {
        const credentials = {
            username: username,
            password: password
        }
        const URL = "http://localhost:3001/api/login"
        const result = await axios(URL, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(credentials)
        });
        console.log(result);

        if (result.status === 401) {
            console.log("Fehler")
            setShowErrorMessage(true)
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

        
    }

    return (
        <LoginContainer>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="E-Mail" />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
            {showErrorMessage && 
                <ErrorMessage>
                    Falscher User und/oder falsches Passwort.
                </ErrorMessage>
            }
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    grid-area: Main;
    /*box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    margin: 5px;
`

const ErrorMessage = styled.div`
    color: red;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 5px;
    `