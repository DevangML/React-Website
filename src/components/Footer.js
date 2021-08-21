import React from "react";
import VIT from "../components/pages/image/2.jpg";

function Footer() {
  return (
    <div className="Foot">
      <h1 className="retroshadow foot-h1">I Study At</h1>
      <div className="foot-img-cont">
        <img className="foot-img" src={VIT} />
      </div>
      <h1 className="retroshadow foot-h1">Work At</h1>
      <div className="foot-img-cont">
        <img className="foot-img" src={VIT} />
      </div>
    </div>
  );
}

export default Footer;
