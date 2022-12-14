import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactStyle.css';

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <form className='contact'>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' placeholder='Enter your name' />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter your email' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter your password' />
        </div>

        <div>
          <label htmlFor='mobile'>Mobile</label>
          <input type='text' placeholder='Enter your mobile' />
        </div>

        <div className='btnBox'>
          <div className='btn'>
            <Link to='/' className='readMore'>
              Submit
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
