import React from "react";
import NavbarAuth from "../../components/nav-bar/nav-bar-auth";
import Axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";
import './homePage.css';

function HomePage (){

    const [loginStatus,setLoginStatus]=useState('')

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response)=>{
          if(response.data.loggedIn == true){
            setLoginStatus(response.data.user[0].user_name)
            console.log(response.data.user[0].username)
          }
          else{
            console.log("No element")
            setLoginStatus("log out")
          }
          
        })
      },[])
    return (
        <div className="black">
            <NavbarAuth/>
            <div className="align-center">
            <div className="home-intro background-box">
              <h2>App Success Predictor</h2>
            
            <p>Welcome to our app success predictor, a cutting-edge solution that utilizes machine learning to forecast the success of mobile applications based on key attributes. With our predictor, developers can make informed decisions and maximize their app's potential in today's competitive market.</p>
            </div>
            </div>

            <div className="align-center">
            <div className="home-intro background-box">
            <h2>Instructions</h2>
            <ol className="list">
              <li>Launch the app success predictor on your device.</li>
              <li>Input the relevant attributes of your mobile application.</li>
              <li>Click on the "Predict" button to generate the success score.</li>
              <li>Attributes considered:</li>
              
            </ol>
            <ul className="list unordered">
              <li>App Name: Enter the name of your mobile application.</li>
              <li>Category: Select the appropriate category from a predefined list.</li>
              <li>App Size: Specify the size of your application in kilobytes (KB).</li>
              <li>App Type: Choose whether your app is free or paid.</li>
              <li>App Price: Enter the price of your app.</li>
              <li>Age Rating: Indicate the appropriate age rating for your app.</li>
              <li>Description: Provide a brief description of your app.</li>
            </ul>
            
            </div>


            </div>
            {/* <div className="align-center">
            <div className="home-intro background-box">
            <h3>Attributes considered:</h3>
            <ol>
              <li>App Name: Enter the name of your mobile application.</li>
              <li>Category: Select the appropriate category from a predefined list.</li>
              <li>App Size: Specify the size of your application in kilobytes (KB).</li>
              <li>App Type: Choose whether your app is free or paid.</li>
              <li>App Price: Enter the price of your app.</li>
              <li>Age Rating: Indicate the appropriate age rating for your app.</li>
              <li>Description: Provide a brief description of your app.</li>
            </ol>
             </div>
            </div> */}


            <div className="align-center">
           <button className="special-button" onClick={()=>{
            window.location.replace('http://localhost:3000/form')
           }}><b>Try it Now</b></button>
            </div>
        </div>
    )
}


export default HomePage;