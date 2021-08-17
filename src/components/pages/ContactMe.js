import React from 'react';
import '../../App.css';

export default function ContactMe() {
  return (
    <div className='contact-container'>
      <div className='form-cont'>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            &nbsp;&nbsp;
            <input type="text" id="name" required />
          </div>
          <br/>
          <div>
            <label htmlFor="email">Email:</label>
            &nbsp;&nbsp;
            <input type="email" id="email" required />
          </div>
          <br/>
          <div>
            <label htmlFor="message">Message:</label>
            &nbsp;&nbsp;
            <textarea id="message" required />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
