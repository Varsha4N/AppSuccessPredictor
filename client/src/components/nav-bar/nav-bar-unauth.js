import React from "react";
//import { NavLink as Link } from "react-router-dom";
import './nav-bar.css'
function NavbarUnauth (){
    return (
        <div>
            <ul className="nav-bar-color">
            <li>
                <button onClick={()=>{
                    window.location.replace("http://localhost:3000/login")
                }}><b>App Success Predictor</b></button>
            </li>

            </ul>
           

        </div>
    )
}

export default NavbarUnauth;