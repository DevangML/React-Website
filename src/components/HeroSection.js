import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typed from 'react-typed';
import styled from 'styled-components';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Devang Manjramkar</h1>
      <Typed strings={['I am Web Developer']} typeSpeed={44} loop style={{color:'whitesmoke'}}/>
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
