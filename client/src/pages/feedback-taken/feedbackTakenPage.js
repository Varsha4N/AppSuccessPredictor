import React from "react";
import NavbarAuth from "../../components/nav-bar/nav-bar-auth";
import './feedbackTakenPage.css';

function FeedbackTakenPage (){
    return (
        <div>
            <NavbarAuth/>
            <div className="align-center">
            <div className="feedback-form background-box">
            <h1>Thank You for your Feedback</h1>
            <button className="button login-button" onClick={()=>{
                 window.location.replace('http://localhost:3000/home')
            }}>Home</button>
            </div>
            </div>
        </div>
    )
}


export default FeedbackTakenPage;