import React from "react";
import "./Cards.css";


function Cards() {
  return (
    <div className="cards">
      <h1 className="Head">About Me</h1>
      <br />
      <h2 align="center">
        I am Executive Committee Member at IEEE Students' Branch, VIT Pune
      </h2>
      <br />
      <br />
      <p className='Para'>
        I am an engineering student at Vishwakarma Institute Of Technology,
        Pune. I study in the AI-DS branch. I love Machine Learning, artificial
        intelligence and web development. I am a Linux enthusiast and like to
        keep Fedora as my main machine. I am a security and privacy enthusiast
        too. Over the last one year I have gained some hand over C, C++, Python,
        HTML, CSS and JavaScript, with two projects one in C and other in
        Python. I am also executive committee member of IEEE Student Branch, VIT
        Pune.
      </p>
      <br />
      <h1 className='Head'>Skills I have</h1>
      <br/><br/>
      <div className='Cardcont'>
        <img className='Img' src="./images/C.png" width="4em" height="4em" />
        <img className='Img' src="./images/C++.png" width="4em" height="4em" />
        <img className='Img' src="./images/html.png" width="4em" height="4em" />
        <img className='Img' src="./images/css.png" width="4em" height="4em" />
        <img className='Img' src="./images/JS.png" width="4em" height="4em" />
        <img className='Img' src="./images/python.png" width="4em" height="4em" />
        <img className='Img' src="./images/mern.png" width="4em" height="4em" />
      </div>
    </div>
  );
}

export default Cards;
