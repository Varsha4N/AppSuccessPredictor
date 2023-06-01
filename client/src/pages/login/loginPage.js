import React from "react";
import NavbarUnauth from "../../components/nav-bar/nav-bar-unauth";
import './loginPage.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'


function LoginPage (){

    const navigate = useNavigate()

    const [userName , setUserName]= useState('');
    const [password , setPassword]= useState('');
    const [error,setError] = useState("");
    const [loginStatus , setLoginStatus] = useState('')

    const register = ()=>{
        // navigate('/register')
        window.location.replace('http://localhost:3000/register')

    }

    const login =()=>{

      if(userName === "" || password===""){
        setError("Please enter valid data")
      }
      else{
        Axios.post(`http://localhost:3001/login`,
        {
          userName : userName,
          password: password
        }
        ).then((Response)=>{
          
          if(Response.data.message){
            setError(Response.data.message)
    
          }
          else{
            setLoginStatus(Response)
            console.log(Response.data[0].user_name)
            if(Response.data[0].user_name !== ""){
              // navigate('/home')
              window.location.replace('http://localhost:3000/home')
            }
            
            // window.location.replace('https://www.youtube.com')
           // window.location.replace('http://localhost:3000/sample')
          }
        })
      }
      }

    return (
        <div>
            <NavbarUnauth/>
            <div className="grid-container">

                <div>

                <img className="img" src='images/image.png' alt="image" height={400} width={500}></img>
                  
                </div>

                <div className="login-form background-box">

                    <h1>Login</h1>
                    <input  type="text" placeholder='UserName' onChange={(e)=>{ setUserName(e.target.value) }}/>
                    <input type="password" placeholder='Password' onChange={(e)=>{ setPassword(e.target.value)}}/>
                    {(error !== "") ? <div className="error">{error}</div> : ""}
                    <button className="login-button button" onClick={login}>login</button>

                    <span class="horizontal-line"></span>
                    <span className="text">New User?</span>
                    <button className="login-button button" onClick={register}>Register</button>
                    
                </div>

            </div>
            

        </div>
    )
}

export default LoginPage;