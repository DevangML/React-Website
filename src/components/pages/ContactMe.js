import React, {useState} from 'react'
import Axios from 'axios';

function ContactMe() {
  const [user,setUser] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  });


  const handleInputs = (e) => {
   const newuser = {...user}
   newuser[e.target.name] = e.target.value
   setUser(newuser)
   console.log(newuser)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      Axios.post(url,
      {name: user.name, email: user.email, phone: user.phone, message: user.message},)
      .then(res => {
        console.log(res);
        console.log(res.user);
        window.location = "/contact"
      })  
  }

  const url = "http://127.0.0.1:8000/contact"
  

  return (
    <div className="container">
        <div className="form" >
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              I would love to hear more from you
            </p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p className='cont-p'>Pune,</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p className='cont-p'>devangmanjramkar@gmail.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p className='cont-p'>8806113283</p>
              </div>
            </div>

            <div className="social-media">
              <p className='cont-p'>Connect with me :</p>
              <div className="social-icons">
                <a href="https://github.com/DevangML" target='_blank'>
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/devangm29" target='_blank'>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/mldev02/" target='_blank'>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">

            <form action="index.html" autocomplete="off" onSubmit={handleSubmit}>
              <h3 className="title">Contact Me</h3>
              <div className="input-container">
               <input type="text" name="name" className="input" placeholder='Name' value={user.name} onChange={handleInputs}/>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" placeholder='Email' value={user.email} onChange={handleInputs}/>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" placeholder='Phone' value={user.phone} onChange={handleInputs}/>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" placeholder='Message' value={user.message} onChange={handleInputs}></textarea>
              </div>
              <input type="submit" value="Send" className="cont-btn" />
            </form>
          </div>
        </div>
      </div>
  )
}

export default ContactMe


