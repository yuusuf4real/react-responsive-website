import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <h1>Our Services</h1>
      <div className='services'>
        <div className='card'>
          <h2>{props.title1}</h2>
          <img src={props.imgSource} alt='service1' className='serviceImg' />
          <p>{props.desc1}</p>
          <div className='btnBox'>
            <div className='btn'>
              <Link to='/about' className='readMore'>
                {props.btnservice}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
