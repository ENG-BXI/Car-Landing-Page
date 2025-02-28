import React from 'react';

const Footer = () => {
  return (
    <footer className='container d-flex flex-column row-gap-3'>
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
          <i className='ri-facebook-fill'></i>
          <i className='ri-instagram-line'></i>
          <i className='ri-twitter-line'></i>
        </div>
      </div>
      <div className='text-center'>&#169; BXI. All rigths reserved</div>
    </footer>
  );
};

export default Footer;
