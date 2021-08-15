import React from "react";
import "../../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default function Gallary() {
  return (
    <div class="gallary">
      <div>
        <h1 className='H1'>My Certificates</h1>
      </div>
      <Carousel infiniteLoop autoPlay stopOnHover transitionTime='500' className='Car'>
        <div>
          <img src="./images/Cert/AI.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./images/Cert/C.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="./images/Cert/C++.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/C++_DSC.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/EF-SET.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/ISA-C.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/Python-Beg.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/Python-IEEE.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/Python-Int.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/VishwaConclave.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
