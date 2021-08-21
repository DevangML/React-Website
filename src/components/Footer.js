import React from "react";
import VIT from '../components/pages/image/VIT.svg'

function Footer() {
  return (
    <div className="Foot">
      <h1 className="retroshadow foot-h1">I Study At</h1>
      <br/>
        <img src={VIT} className='foot-img'/><br/>
        <figcaption>Vishwakarma Institute of Technology</figcaption>
        <h1 className="retroshadow foot-h1">Work At</h1>
      <br/>
        <img src={VIT} className='foot-img'/><br/>
        <figcaption>IEEE Student's branch, VIT Pune</figcaption>

    </div>
  );
}

export default Footer;
