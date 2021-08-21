import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import AI from '../../assets/images/Cert/AI.jpeg'
import Cc from '../../assets/images/Cert/C.jpeg'
import Cpp from '../../assets/images/Cert/C++.jpeg'
import Cppd from '../../assets/images/Cert/C++_DSC.jpeg'
import efset from '../../assets/images/Cert/EF-SET.jpeg'
import isa from '../../assets/images/Cert/ISA-C.jpeg'
import pytbeg from '../../assets/images/Cert/Python-Beg.jpeg'
import pytieee from '../../assets/images/Cert/Python-IEEE.jpeg'
import pytint from '../../assets/images/Cert/Python-Int.jpeg'
import vishwa from '../../assets/images/Cert/VishwaConclave.jpeg'

export default function Gallary() {
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
