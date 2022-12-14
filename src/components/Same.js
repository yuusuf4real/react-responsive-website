import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeAbout.css';

const Same = (props) => {
  return (
    <>
      <div className='mainSection'>
        <div className='contentBox'>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <div className='btnBox'>
            <div className='btn'>
              <Link to='/about' className='readMore'>
                {props.btn}
              </Link>
            </div>
          </div>
        </div>
        <div className='imgContainer'>
          <img src={props.imgsrc} alt='home' />
        </div>
      </div>
    </>
  );
};

export default Same;
