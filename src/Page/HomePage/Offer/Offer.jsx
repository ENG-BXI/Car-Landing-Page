import React from 'react'
import "./Offer.css"
import OfferImage from '../../../assets/img/offer.png';
const Offer = () => {
  return (
    <section id='offer' className='offer overflow-hidden'>
      <div className='offer-data container w-75 d-flex flex-column text-lg-start flex-lg-row  justify-content-center row-gap-4 align-items-center text-center h-100 '>
        <div>
            <h2>Do You Want To Receive <br /> Special Offers?</h2>
            <p>Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.</p>
            <button className='btn btn-primary'>Subscribe Now</button>
        </div>
        <img className='offer-car' src={OfferImage} alt='OfferImage' />        
      </div>
    </section>
  );
}

export default Offer