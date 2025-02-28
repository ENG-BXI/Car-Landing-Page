import React from 'react';
import Hero from './Hero/Hero';
import Header from '../../Components/Header/Header';
import About from './About/About';
import Popular from './Popular/Popular';
import Features from './Features/Features';
import Featured from './Featured/Featured';
import Offer from './Offer/Offer';
import Companies from './Companies/Companies';
import Footer from './Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Popular />
      <Features />
      <Featured />
      <Offer />
      <Companies />
      <Footer />
    </>
  );
};

export default HomePage;
