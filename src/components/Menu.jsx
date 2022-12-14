import React from 'react';
import logo from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import '../styles/MenuStyle.css';

const Menu = () => {
  return (
    <>
      <header>
        <div className='container container-flex'>
          <div className='logoContainer'>
            <img src={logo} alt='logo' className='logo' />
          </div>
          <nav>
            <div className='menu'>
              <Link to='/' className='menuItem' activeClassName='activeItem'>
                Home
              </Link>
              <Link
                to='/about'
                className='menuItem'
                activeClassName='activeItem'
              >
                About
              </Link>
              <Link
                to='/contact'
                className='menuItem'
                activeClassName='activeItem'
              >
                Contact
              </Link>
              <Link
                to='/services'
                className='menuItem'
                activeClassName='activeItem'
              >
                Services
              </Link>
              <Link
                to='/policy'
                className='menuItem'
                activeClassName='activeItem'
              >
                Policy
              </Link>
            </div>
          </nav>
          <div className='icons'>
            <SearchIcon className='icon' />
            <PersonIcon className='icon' />
            <PhoneIcon className='icon' />
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
