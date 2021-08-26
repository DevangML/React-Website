import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VIT from "../components/pages/image/VIT.svg";
import IEEE from "../assets/videos/IEEE.mp4";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="Foot">
      <article>
      <div className="tim-head">I Study At</div>
      </article>
      <br />
      <img src={VIT} className="foot-img" data-aos="slide-up" />
      <br />
      <figcaption data-aos="slide-up">
        Vishwakarma Institute of Technology
      </figcaption>
      <br />
      <br />
      <article>
        <div className="tim-head">Work At</div>
      </article>
      <br />
      <video
        data-aos="slide-up"
        src={IEEE}
        className="foot-img"
        autoPlay
        loop
        muted
        disablePictureInPicture
      />
      <br />
    </div>
  );
}

export default Footer;
