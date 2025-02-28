import React from 'react';
import AboutImage from '../../../assets/img/about.png';
import "./About.css"
const About = () => {
  return (
    <section id='about' className='container d-flex flex-column flex-sm-row gap-5 align-items-start align-items-sm-start '>
      <div className='about-image-cover position-relative'>
        <img src={AboutImage} alt='AboutImage' className='rounded-2' />
        <div className='About-card rounded-4 px-3 py-2 text-center'>
          <h5>2.500+</h5>
          <p>Supercharges placed along popular routes</p>
        </div>
      </div>
      <div className='about-data'>
        <h2 className='mb-3'>
          Machines With <br /> Future Technology
        </h2>
        <p className='mb-5'>See the future with high-performance electric cars produced by renowned brands. They feature futuristic builds and designs with new and innovative platforms that last a long time.</p>
        <button className='btn btn-primary'>Know more</button>
      </div>
    </section>
  );
};

export default About;
