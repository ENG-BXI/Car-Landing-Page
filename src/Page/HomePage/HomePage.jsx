import React from 'react';
import Hero from './Hero/Hero';
import Header from '../../Components/Header/Header';
import About from './About/About';
import Popular from './Popular/Popular';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Popular />
    </>
  );
};

export default HomePage;
