import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import AI from '../../assets/images/Cert/AI.jpg'
import Cc from '../../assets/images/Cert/C.jpg'
import Cpp from '../../assets/images/Cert/C++.jpg'
import Cppd from '../../assets/images/Cert/C++_DSC.jpg'
import efset from '../../assets/images/Cert/EF-SET.jpg'
import isa from '../../assets/images/Cert/ISA-C.jpg'
import pytbeg from '../../assets/images/Cert/Python-Beg.jpg'
import pytieee from '../../assets/images/Cert/Python-IEEE.jpg'
import pytint from '../../assets/images/Cert/Python-Int.jpg'
import vishwa from '../../assets/images/Cert/VishwaConclave.jpg'

export default function Gallery() {
  useEffect(() => {
    AOS.init({duration : 600});
    AOS.refresh();
  }, []);
  return (
    <div class="gallary" data-aos="zoom-out" data-aos-easing="ease-out-quart">
      <div>
        <h1 className='retroshadow gal-h1'>My Certificates</h1>
      </div>
      <br/>
      <Carousel infiniteLoop autoPlay stopOnHover transitionTime='500' className='Car' showStatus={false}>
        <div>
          <img src={AI} className='gal-img'/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Cc} className='gal-img'/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Cpp} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={Cppd} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={efset} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={isa} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={pytbeg} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={pytieee} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={pytint} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={vishwa} className='gal-img'/>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
