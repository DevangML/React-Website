import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function HeroSection() {
  return (
    <div className="hero-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="Hero-H2">Devang G. Manjramkar</h1>
      <br />
      <Typed
        strings={["I am Web Developer"]}
        typeSpeed={44}
        loop
        className="type"
      />
      <div className="hero-btns">
        <a href="https://drive.google.com/uc?export=download&id=1lcGTUHwzRJJPbqdlv5BwNfPQ8I2ZH-wr" class="cta" target='_blank'>
          <span className='aspan'>Resume</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
         
      </div>
    </div>
  );
}

export default HeroSection;
