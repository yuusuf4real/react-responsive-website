import React from 'react';
import Same from './Same';
import logo from '../images/logo.png';
import '../styles/HomeAbout.css';

const About = () => {
  return (
    <>
      <Same
        title='Know more about us'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut,
            earum, quam molestiae dignissimos ea ducimus doloremque nisi ratione
            sed excepturi eius id quod ad laboriosam et dolorum aut quibusdam.'
        imgsrc={logo}
        btn='Learn More'
      />
    </>
  );
};

export default About;
