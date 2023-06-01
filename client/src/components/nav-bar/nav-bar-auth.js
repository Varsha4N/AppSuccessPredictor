import React from "react";
//import { NavLink as Link } from "react-router-dom";
import './nav-bar.css'
import Axios from 'axios'

function NavbarAuth (){


    const logout = () =>{
        Axios.get(`http://localhost:3001/logout`).then((response)=>{
          window.location.replace('http://localhost:3000/login')
          console.log(response)
        })
      }
    return (
        <div>
            <ul className="nav-bar-color">
            <li>
            <button onClick={logout}>App Success Predictor</button>
                
            </li>
            <li>
            <button onClick={()=>{
                    window.location.replace("http://localhost:3000/home")
                }}>Home</button>
            
            </li>
            <li>
            <button onClick={()=>{
                    window.location.replace("http://localhost:3000/form")
                }}>Form</button>
            </li>
            <li className="rightAlign">
            <button onClick={logout}>Logout</button>
        
            </li>
            <li className="rightAlign">
            <button onClick={()=>{
                    window.location.replace("http://localhost:3000/feedback")
                }}>Feedback</button>
            
            </li>
            

            </ul>
           

        </div>
    )
}

export default NavbarAuth;