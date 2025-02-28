import React from 'react';
import logoImage from '../../assets/img/logo1.png';
import './Header.css';
const Header = () => {
  return (
    <header className='d-flex container mt-3 justify-content-between align-items-center mb-5'>
      <a href='/#' className='logo d-flex column-gap-1 align-items-center' >
        <img src={logoImage} style={{height: '30px'}} alt='LogoImage' />
        Elecar
      </a>
      <ul className='links d-none d-sm-flex column-gap-3 mb-0'>
        <a href='#hero'>Home</a>
        <a href='#about'>about</a>
        <a href='#popular'>popular</a>
        <a href='#featured'>featured</a>
      </ul>
    </header>
  );
};

export default Header;
