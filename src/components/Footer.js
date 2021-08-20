import React from "react";


function Footer() {
 
  return (
    <div className="Foot" >
      <h1 className="Headfoo">Contact</h1>
      <br />
      <h2 align="center" className="Headfoo2">
        For any business enquiries get in touch with me through my address
        and email-id
      </h2>
      <br />
      <br />
      <div className="address" className="Addfoo">
        <i className="icofont-google-map"></i>
        <h4 className="locc">Location: Pune, MH, IN</h4>
      </div>
      <br />
      <div className="Mailfoo" >
        <i className="icofont-envelope"></i>
        <h4 className="ml">Email: devang.manjramkar20@gmail.com</h4>
      </div>
      <br />
      <iframe title="location" src="https://maps.google.com/maps?q=Pune&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
      <br />
    </div>
  )
};

export default Footer;
