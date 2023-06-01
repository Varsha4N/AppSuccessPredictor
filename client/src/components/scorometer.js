import React from "react";
import Sketch from 'react-p5'

import { useParams } from 'react-router-dom';
import FormPage from "../pages/form/formPage";

function Scorometer (){

     const minVal = 0;
    const maxVal = 400;
    let score = 300;
    let angle, angleRad, len, xs, ys, xe, ye;

    const { pathVariable } = useParams();

    // Update the score value based on the path variable
    if (pathVariable) {
      score = parseInt(pathVariable);
    }

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(800, 450).parent(canvasParentRef);
        p5.background(0);
        p5.fill(191, 0, 255);
        p5.circle(400, 350, 500);
        p5.fill(0);
        p5.circle(400, 350, 400);
        p5.rect(0, 350, 800, 150);
        p5.textSize(16);
        p5.fill(255);
        p5.text(minVal, 150 - 20, 350);
        p5.text(maxVal, 650 + 10, 350);
        angle = (score / maxVal) * 180 + 180;
        angleRad = p5.radians(angle);
        len = 210;
        xs = 400;
        ys = 350;
        xe = xs + p5.cos(angleRad) * len;
        ye = ys + p5.sin(angleRad) * len;
        p5.fill(255);
        p5.text(score, xs + p5.cos(angleRad) * (len + 60), ys + p5.sin(angleRad) * (len + 60));
        p5.stroke(255);
        p5.strokeWeight(13);
        p5.line(xs, ys, xe, ye);
        p5.fill(0);
        p5.stroke(40, 0, 20);
        p5.strokeWeight(3);
        p5.circle(400, 350, 4);
      };


      return (
        <Sketch setup={setup}  />
      )


}

export default Scorometer