import React from "react";
import VIT from '../components/pages/image/VIT.svg'
import IEEE from '../assets/videos/IEEE.mp4'

function Footer() {

  return (
    <div className="Foot">
      <h1 className="retroshadow foot-h1">I Study At</h1>
      <br/>
        <img src={VIT} className='foot-img' /><br/>
        <figcaption>Vishwakarma Institute of Technology</figcaption>
        <br/><br/>
        <h1 className="retroshadow foot-h1">Work At</h1>
      <br/>
        <video src={IEEE} className='foot-img' autoPlay loop muted disablePictureInPicture /><br/>

    </div>
  );
}

export default Footer;
