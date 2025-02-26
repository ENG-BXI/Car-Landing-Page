import React from 'react';
import logoImage from '../../assets/img/logo1.png';
import bootstrap from 'bootstrap';
import './Header.css';
const Header = () => {
  return (
    <header className='d-flex container mt-3 justify-content-between align-items-center mb-5'>
      <div className='logo d-flex column-gap-1 align-items-center'>
        <img src={logoImage} style={{height: '30px'}} alt='LogoImage' />
        Elecar
      </div>
      <ul className='links d-none d-sm-flex column-gap-3 mb-0'>
        <li>home</li>
        <li>about</li>
        <li>popular</li>
        <li>featured</li>
      </ul>
    </header>
  );
};

export default Header;
