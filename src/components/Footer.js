import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VIT from '../components/pages/image/VIT.svg'
import IEEE from '../assets/videos/IEEE.mp4'

function Footer() {
  useEffect(() => {
    AOS.init({duration : 1000});
    AOS.refresh();
  }, []);

  return (
    <div className="Foot">
      <h1 className="retroshadow foot-h1"  data-aos="slide-up">I Study At</h1>
      <br/>
        <img src={VIT} className='foot-img' data-aos="slide-up"/><br/>
        <figcaption data-aos="slide-up">Vishwakarma Institute of Technology</figcaption>
        <br/><br/>
        <h1 className="retroshadow foot-h1" data-aos="slide-up">Work At</h1>
      <br/>
        <video data-aos="slide-up" src={IEEE} className='foot-img' autoPlay loop muted disablePictureInPicture /><br/>
    </div>
  );
}

export default Footer;
