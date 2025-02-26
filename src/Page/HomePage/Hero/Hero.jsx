import React from 'react';
import HeroImage from '../../../assets/img/home.png';
import './Hero.css';

let InfoList = [
  {icon: 'Km', number: '873', text: 'MILEAGE'},
  {icon: <i class='ri-temp-cold-fill'></i>, number: '24°', text: 'TEMPERATURE'},
  {icon: <i className='ri-flashlight-fill'></i>, number: '94%', text: 'BATTERY'}
];
function InfoItem(props) {
  return (
    <>
      <div className='d-flex flex-column row-gap-2 align-items-center'>
        <div style={{backgroundColor: 'var(--container-color'}} className={`py-1 ${props.index === 0 ? 'px-1' : 'px-2'} rounded-circle text-white`}>
          {' '}
          {props.icon}
        </div>
        <span className='text-white fs-5'>{props.number}</span>
        <p style={{fontSize: '0.75rem'}}>{props.text}</p>
      </div>
    </>
  );
}
const Hero = () => {
  return (
    <section className='hero container d-flex flex-column align-items-center '>
      <h2 className='mb-4'>Choose The Best Car</h2>
      <h3>Porsche Mission E</h3>
      <p>
        <i style={{color: 'var(--first-color)', fontSize: '18px'}} className='ri-flashlight-fill'></i> Electric car
      </p>
      <img className='HeroImage mb-4' src={HeroImage} alt='HeroImage' />
      <div className='info d-flex column-gap-4 justify-content-center mb-3'>
        {InfoList.map((element, index) => {
          return <InfoItem key={index} index={index} icon={element.icon} number={element.number} text={element.text} />;
        })}
      </div>
      {/* start circle */}
      <div className='start-circle'>
        <p>start</p>
      </div>
    </section>
  );
};

export default Hero;
