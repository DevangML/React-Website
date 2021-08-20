import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 900 });
    AOS.refresh();
  }, []);
  return (
    <div className="Foot" data-aos="fade-up">
      <h1 className="Head" data-aos="fade-up">Contact</h1>
      <br />
      <h2 align="center" data-aos="fade-up" >
        For any business enquiries get in touch with me through my address
        and email-id
      </h2>
      <br />
      <br />
      <div className="address" data-aos="fade-up">
        <i className="icofont-google-map" data-aos="fade-up"></i>
        <h4 id="locc" data-aos="fade-up">Location: Pune, MH, IN</h4>
      </div>
      <br />
      <div className="email" data-aos="fade-up">
        <i className="icofont-envelope" data-aos="fade-up"></i>
        <h4 id="ml" data-aos="fade-up">Email: devang.manjramkar20@gmail.com</h4>
      </div>
      <br />
      <iframe data-aos="fade-up" title="location" src="https://maps.google.com/maps?q=Pune&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
      <br />
    </div>
  )
};

export default Footer;
