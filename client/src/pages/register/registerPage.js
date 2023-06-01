import React from "react";
import NavbarUnauth from "../../components/nav-bar/nav-bar-unauth";
import { useState } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './registerPage.css'
function RegisterPage (){

    const [userName , setUserName]= useState('');
    const [password , setPassword]= useState('');
    const [Confirmpassword , setConfirmPassword]= useState('');

    const [email , setEmail]=useState('');
    const [error,setError] = useState("");

    let navigate = useNavigate();
    const register =()=>{

        if(userName==="" ||password==="" || Confirmpassword===""||email===""){
            setError("Please enter valid data ")
        }
        else if(password !== Confirmpassword){
            setError("Password and confirm password doesn't match")
        }
        
        else{
            Axios.post(`http://localhost:3001/register`,
        {
          username : userName,
          emailid : email,
          password: password
        }
        ).then((Response)=>{
          //window.location.replace('http://localhost:3000')
          if(Response.data.message){
            setError(Response.data.message)
          }
          else{
            //navigate('/home')
            window.location.replace('http://localhost:3000/home')

          }
          
          console.log(Response)
        })

        }
        
      }


    return(
        <div>
            <NavbarUnauth/>
            <div className="align-center">

            

            <div className="register-form background-box">

                
                    <h1>Register</h1>
                    <table>

                    <tr>
                    
                        <td>

                        
                        <label>User Name</label>
                        </td>
                        <td>
                        <input  type="text"  onChange={(e)=>{ setUserName(e.target.value) }}/>
                        </td>

                    
                    </tr>
                    <tr>
                    
                        <td>
                        <label>Email ID</label>
                        </td>
                        <td>
                        <input  type="text"  onChange={(e)=>{ setEmail(e.target.value) }}/>
                        </td>

                    
                    </tr>
                    <tr>
                    
                        <td>
                        <label>Password</label>
                        </td>
                        <td>
                        <input type="password"  onChange={(e)=>{ setPassword(e.target.value)}}/>
                        </td>
                    
                    </tr>
                    <tr>
                    
                        <td>
                        <label>Confirm Password</label>
                        </td>
                        <td>
                        <input type="password"  onChange={(e)=>{ setConfirmPassword(e.target.value)}}/>
                        </td>
                    
                    </tr>
                    </table>
                    
                    
                   

                    {(error !== "") ? <div className="error">{error}</div> : ""}
                    <button className="login-button button" onClick={register}>Register</button>

                    

                </div>
                </div>

        </div>
    )
}

export default RegisterPage;