import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/FooterStyle.css';

const Footer = () => {
  return (
    <footer>
      <div className='container container-flex'>
        <div className='icon'>
          <FacebookIcon className='icon' />
          <TwitterIcon className='icon' />
          <LinkedInIcon className='icon' />
          <InstagramIcon className='icon' />
        </div>
        <div className='line'>
          <hr />
          <hr />
        </div>
        <div className='copyright'>
          <p>All rights reserved &copy;</p>
          <p>Developed by Yusuf Ariyibi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
