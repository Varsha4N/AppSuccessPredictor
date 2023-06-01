import React from "react";
import Sketch from 'react-p5'
import Scorometer from "../../components/scorometer";
import NavbarAuth from "../../components/nav-bar/nav-bar-auth";
import { useParams } from 'react-router-dom';
function ResultPage (){

     const { pathVariable } = useParams();
     let score

     if (pathVariable) {
        score = parseInt(pathVariable);
      }
  


    return(
        <div>
            <NavbarAuth/>
             <Scorometer/>
             <div className="align-center">
            <div className="home-intro background-box">
                <p>The Predicted Score is {score}</p>
            </div>
            </div>
        </div>
    )
}

export default ResultPage;