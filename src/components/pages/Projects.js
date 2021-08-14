import React from 'react';
import '../../App.css';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css'



export default function Projects() {
  return (
    <div class="document-center">
      <!--This carousel-container only exists so we can do the 
      aspect ratio tricks in CSS-->
      <div class="carousel-container">
        <div class="carousel" id="carousel-1" auto-scroll="7000">
          
          <section class="carousel-screen">
            <img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="Chicago Band" />
            <section class="text-container">
              <p>Chicago</p>
              <p>Thank you, Chicago!</p>
            </section>
          </section>
          <section class="carousel-screen">
            <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="New York" />
            <section class="text-container">
              <p>New York</p>
              <p>We love the Big Apple!</p>
            </section>
          </section>
          <section class="carousel-screen">
            <img src="https://www.w3schools.com/bootstrap/la.jpg" alt="Los Angeles" />
            <section class="text-container">
              <p>Los Angeles</p>
              <p>LA is always so much fun!</p>
            </section>
          </section>
        
          <section class="circle-container">
            <!--These 'circles' need to match the number of carousel screens-->
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </section>
          <div class="left-arrow">
            <span class="chevron left"></span>
          </div>
          <div class="right-arrow">
            <span class="chevron right"></span>
          </div>
        </div>
      </div>
    </div>   
  );
}
