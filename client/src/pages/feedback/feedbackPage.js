import React from "react";
import NavbarAuth from "../../components/nav-bar/nav-bar-auth";
import "./feedback.css"
import { useState } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function FeedbackPage (){

    let navigate = useNavigate();
    const [userId,setuserId]=useState(0)
    const [feedback,setFeedback]=useState('')
    const [error, setError]=useState('')

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response)=>{
          if(response.data.loggedIn === true){
            setuserId(response.data.user[0].user_id)
            console.log(response.data.user[0].user_name)
          }
          else{
            console.log("No element")
          }
          
        })
      },[])

      const feedbackSent = ()=>{
                if(feedback===""){
                    setError("Please enter valid feedback")
                }
                else{
                    Axios.post(`http://localhost:3001/feedback`,
                    {
                        userId : userId,
                        feedback : feedback

                    }).then((Response)=>{
                        if(Response.data.message){
                                setError(Response.data.message)
                        }
                        else{

                            window.location.replace('http://localhost:3000/home')
                        }
                        
                        
                        // navigate('/feedbackTaken')
                    })
                }
                window.location.replace('http://localhost:3000/feedbackTaken')
      }


    return (
        <div>
            <NavbarAuth/>
            <div className="align-center">
            <div className="feedback-form background-box">
            <h1>Feedback</h1>
            <textarea placeholder="Enter your feedback here" onChange={(e)=>{ setFeedback(e.target.value) }}/>
            {(error !== "") ? <div className="error">{error}</div> : ""}
                    <button className="login-button button" onClick={feedbackSent}>Send</button>
            </div>
            </div>
        </div>
    )
}


export default FeedbackPage;