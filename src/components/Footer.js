import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    AOS.init({duration : 700});
    AOS.refresh();
  }, []);
  return (
    <div>
      <section id="contact" className="contact">
        <div className="section-title" >
          <h2 className="heading">Contact</h2>
          <p className='Foot-Para'>
            For any business enquiries get in touch with me through my address
            and email-id
          </p>
        </div>

        <div className="address">
          <i className="icofont-google-map"></i>
          <h4 id="locc">Location: Pune, MH, IN</h4>
        </div>
        <br />
        <div className="email">
          <i className="icofont-envelope"></i>
          <h4 id="ml">Email: devang.manjramkar20@gmail.com</h4>
        </div>
        <br/>
        <iframe title="location" src="https://maps.google.com/maps?q=Pune&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
      </section>
    </div>
  );
}

export default Footer;
