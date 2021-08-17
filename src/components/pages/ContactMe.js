import React from 'react';
import '../../App.css';

export default function ContactMe() {
  return (
    <div classNmae='contact-sup-cont'>
    <div className='contact-container'>
      <br/><br/>
      <div className='lft-cont'>
        <img src="/images/tim-bg.png" alt='imh' className='form-img'/>
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
    </div>
  );
}
