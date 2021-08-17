import React from 'react';
import '../../App.css';
import './ContactMe.css'

export default function ContactMe() {
  return (
    <div className='contact-container'>
      <br/><br/>
      <div className='lft-cont'>
        <img src="/images/tim-bg.png" alt='imh' width='500px' height='200px'/>
      </div>
      <div className='form-cont'>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
