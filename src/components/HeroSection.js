import React from 'react';
import { Button } from './Button';
import Typed from 'react-typed';



function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mov' autoPlay loop muted />
      <br/><br/><br/><br/><br/>
      <h1 className='Hero-H2'>Devang Manjramkar</h1>
      <br />
      <Typed strings={['I am Web Developer']} typeSpeed={44} loop className='type' />
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Know More about Me <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
