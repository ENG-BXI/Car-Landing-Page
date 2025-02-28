import React from 'react';
import MapImage from '../../../assets/img/map.svg';
import FeatureImage from '../../../assets/img/features.png';
import './Features.css';
const Features = () => {
  return (
    <section id='features' className='container'>
      <h2 className='text-center mb-5'>More Features</h2>
      <div className='feature-cover d-flex justify-content-center position-relative  '>
        <img className='map-image' src={MapImage} alt='MapImage' />
        <img className='white-car' src={FeatureImage} alt='FeatureImageCar' />
        <div style={{width: '400px'}} className='position-absolute'>
          <FeatureImageCard classNumber='1' number='800v' des='Turbo <br/> Chargin' />
          <FeatureImageCard classNumber='2' number='350' des='Km <br/> Range' />
          <FeatureImageCard classNumber='3' number='480' des='Km <br/> Travel' />
        </div>
      </div>
    </section>
  );
};

export default Features;

function FeatureImageCard(props) {
  return (
    <div className={`feature-image-card text-center feature-image-card-${props.classNumber} rounded-3 text-white position-absolute`}>
      <h5 className='mb-1'>{props.number}</h5>
      <p className='mb-0'>
        {props.des.split('<br/>').map((element, index) => {
          return (
            <span key={index}>
              {element} <br />
            </span>
          );
        })}
      </p>
    </div>
  );
}
