import React from 'react';
import Same from './Same';
import flyer2 from '../images/flyer2.jpg';
import '../styles/HomeAbout.css';

const Home = () => {
  return (
    <>
      <Same
        title='Learning made easy'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut,
            earum, quam molestiae dignissimos ea ducimus doloremque nisi ratione
            sed excepturi eius id quod ad laboriosam et dolorum aut quibusdam.'
        imgsrc={flyer2}
        btn='Read More'
      />
    </>
  );
};

export default Home;
