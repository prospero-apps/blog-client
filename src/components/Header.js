import React from 'react';
import '../style.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <img className='logo' src={logo} alt='logo'/>
      <ul id='nav-links'>
        <Link className='link' to='/'><li>Home</li></Link>
        <Link className='link' to='/login'><li>Log In</li></Link>
        <Link className='link' to='/signup'><li>Sign Up</li></Link> 
        <Link className='link' to='/logout'><li>Log Out</li></Link> 
      </ul>
    </nav>
  )
}

export default Header
