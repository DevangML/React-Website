import React, {useState} from 'react'

function ContactMe() {
  const [user,setUser] = useState({
    user:'',email:'',phone:'',message:''
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
    console.log(e);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="container">
        <div className="form" onSubmit={handleSubmit}>
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              I would love to hear more from you
            </p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p>Pune,</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>devangmanjramkar@gmail.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>8806113283</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with me :</p>
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
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 className="title">Contact Me</h3>
              <div className="input-container">
               <input type="text" name="user" className="input" placeholder='Username' value={user.user} onChange={handleInputs}/>
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
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
  )
}

export default ContactMe


