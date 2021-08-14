import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import styled from "styled-components";

const Para = styled.p`
  background-color: silver;
  border-radius: 30px;
  padding: 1.2em;
`;

const Head = styled.h1`
  font-size: 4em;
`;

const Cardcont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 5px;
  overflow:hidden;
  border: 0;
  justify-content: space-evenly;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
`;

const Img = styled.img`
  display: flex;
  align-items: center;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }

  padding: 0;
  margin: 5px;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  width: 39%;
  height: 100%;
  object-fit: contain;
`;

const Card = styled.div`
  display: inline;
  padding: 1.02em;
  margin: 1.1em;
  border: dotted white;
  border-radius: 30px;
`;

function Cards() {
  return (
    <div className="cards">
      <Head>Devang Manjramkar</Head>
      <br />
      <h2 align="center">
        Executive Committee Member at IEEE Students' Branch, VIT Pune
      </h2>
      <br />
      <br />
      <Para>
        I am an engineering student at Vishwakarma Institute Of Technology,
        Pune. I study in the AI-DS branch. I love Machine Learning, artificial
        intelligence and web development. I am a Linux enthusiast and like to
        keep Fedora as my main machine. I am a security and privacy enthusiast
        too. Over the last one year I have gained some hand over C, C++, Python,
        HTML, CSS and JavaScript, with two projects one in C and other in
        Python. I am also executive committee member of IEEE Student Branch, VIT
        Pune.
      </Para>
      <br />
      <Head>Skills I have</Head>
      <Cardcont>
        <Img src="./images/C.svg" width="50px" height="50px" />
        <Img src="./images/C++.svg" width="50px" height="50px" />
        <Img src="./images/html.svg" width="50px" height="50px" />
        <Img src="./images/css.svg" width="50px" height="50px" />
        <Img src="./images/JS.svg" width="50px" height="50px" />
        <Img src="./images/Python.svg" width="50px" height="50px" />
        <Img src="./images/mern.svg" width="50px" height="50px" />
      </Cardcont>
    </div>
  );
}

export default Cards;
