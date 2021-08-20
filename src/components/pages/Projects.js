import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Services() {
  useEffect(() => {
    AOS.init({duration : 600});
    AOS.refresh();
  }, []);
  return (
    <div className="projects" data-aos="zoom-out" data-aos-easing="ease-out-cubic">
      <div >
        <h1 className='proj-h1'>My Projects</h1>
      </div>
      
      <br />
      <br />
      <Carousel
        infiniteLoop
        autoPlay
        stopOnHover
        transitionTime="500"
        className='carr'
        showStatus={false}
        
      >
        <a
          href="https://github.com/DevangML/Advanced-Scientific-Calculator"
          target="_blank"
        >
          <div>
            <img src="./images/Proj/ASC.png" />
            <p className="legend">Advanced Scientific Calculator</p>
          </div>
        </a>
        <a
          href="https://github.com/DevangML/DevangML.github.io"
          target="_blank"
        >
          <div>
            <img src="./images/Proj/WebSite.png" />
            <p className="legend">Portfolio Website</p>
          </div>
        </a>
        <a href="https://github.com/DevangML/Pandemic-Warrior" target="_blank">
          <div>
            <img src="./images/Proj/Pandemic.svg" />
            <p className="legend">Pandemic Warrior</p>
          </div>
        </a>
        <a href="https://github.com/DevangML/Phoenix-The-Virtual-Assistant" target="_blank">
          <div>
            <img src="./images/Proj/Phoenix.svg" />
            <p className="legend">Phoenix-The Virtual Assistant</p>
          </div>
        </a>
      </Carousel>
    </div>
  );
}
