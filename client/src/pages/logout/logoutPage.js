import React from "react";
import NavbarUnauth from "../../components/nav-bar/nav-bar-unauth";
import Axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";

function LogoutPage (){

    const [loginStatus,setLoginStatus]=useState('')

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response)=>{
          if(response.data.loggedIn == true){
            setLoginStatus(response.data.user[0].username)
            console.log(response.data.user[0].username)
          }
          else{
            console.log("No element")
            setLoginStatus("log out")
          }
          
        })
      },[])

    return (
        <div>
            <NavbarUnauth/>
            <h2>Successfully Logged out </h2>
            <span>{loginStatus}</span>
        </div>

    )
}

export default LogoutPage;