import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

export default function Gallary() {
  useEffect(() => {
    AOS.init({duration : 600});
    AOS.refresh();
  }, []);
  return (
    <div class="gallary" data-aos="zoom-out" data-aos-easing="ease-out-quart">
      <div>
        <h1 className='gal-h1'>My Certificates</h1>
      </div>
      <br/>
      <Carousel infiniteLoop autoPlay stopOnHover transitionTime='500' className='Car' showStatus={false}>
        <div>
          <img src="./images/Cert/AI.jpeg" className='gal-img'/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./images/Cert/C.jpeg" className='gal-img'/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="./images/Cert/C++.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/C++_DSC.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/EF-SET.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/ISA-C.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/Python-Beg.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/Python-IEEE.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/Python-Int.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/Cert/VishwaConclave.jpeg" className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
