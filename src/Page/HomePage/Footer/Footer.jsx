import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer position-relative container d-flex flex-column flex-md-row justify-content-between gap-3 '>
      <div>
        <h4 className='text-white'>Elecar</h4>
        <p>
          We offer the best electric cars of <br />
          the most recognized brands in <br />
          the world.
        </p>
      </div>
      <div>
        <h5 className='text-white'>Company</h5>
        <h6>About</h6>
        <h6>Cars</h6>
        <h6>History</h6>
        <h6>Shop</h6>
      </div>
      <div>
        <h5 className='text-white'>Information</h5>
        <h6>Request a quote</h6>
        <h6>Find a dealer</h6>
        <h6>Contact us</h6>
        <h6>Services</h6>
      </div>
      <div>
        <h5 className='text-white'>Follow us</h5>
        <div className='d-flex column-gap-2 fs-4'>
          <a target='_blank' href='https://www.facebook.com/' rel="noreferrer">
            <i className='ri-facebook-fill'></i>
          </a>
          <a target='_blank' href='https://www.instagram.com/' rel="noreferrer">
            <i className='ri-instagram-line'></i>
          </a>
          <a target='_blank' href='https://twitter.com/' rel="noreferrer">
            <i className='ri-twitter-line'></i>
          </a>
        </div>
      </div>
      <div style={{bottom: '0.5rem', left: '50%', transform: 'translateX(-50%)'}} className='copy-right position-absolute'>
        &#169; BXI. All rigths reserved
      </div>
    </footer>
  );
};

export default Footer;
