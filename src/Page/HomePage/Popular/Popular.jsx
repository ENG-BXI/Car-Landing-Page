import React from 'react';
import Pimage from '../../../assets/img/popular1.png';
import './Popular.css';
import PopularCarCard from '../../../Components/PopularCarCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination'; // استيراد ستايل الباجنيشن
import {Pagination} from 'swiper/modules'; // استيراد الباجنيشن كموديول

let PopularCarCardData = [
  {name: 'Porsche', type: 'Turbo S', image: require('../../../assets/img/popular1.png'), sec: '3.7 Sec', maxSpeed: '356 Km/h', enginType: 'Electric', salary: '$175,900'},
  {name: 'Porsche', type: 'Taycan', image: require('../../../assets/img/popular2.png'), sec: '3.7 Sec', maxSpeed: '356 Km/h', enginType: 'Electric', salary: '$114,900'},
  {name: 'Porsche', type: 'Turbo S Cross', image: require('../../../assets/img/popular3.png'), sec: '3.7 Sec', maxSpeed: '356 Km/h', enginType: 'Electric', salary: '$150,900'},
  {name: 'Porsche', type: 'Boxster 718', image: require('../../../assets/img/popular4.png'), sec: '3.7 Sec', maxSpeed: '356 Km/h', enginType: 'Electric', salary: '$125,900'},
  {name: 'Porsche', type: 'Cayman', image: require('../../../assets/img/popular5.png'), sec: '3.7 Sec', maxSpeed: '356 Km/h', enginType: 'Electric', salary: '$128,900'}
];
const Popular = () => {
  return (
    <section className=' container d-flex flex-column align-items-center position-relative'>
      <h2 className='text-center mb-4'>
        Choose Your Electric Car <br /> Of The Porsche Brand
      </h2>
      <Swiper
        autoplay={{delay: 3000}}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets'
        }}
        modules={[Pagination]}
        loop={true}
        effect='cube'
        breakpoints={{
          320: {slidesPerView: 1.5, spaceBetween: 20},
          440: {slidesPerView: 1.7, spaceBetween: 20},
          500: {slidesPerView: 2, spaceBetween: 30},
          768: {slidesPerView: 2.7, spaceBetween: 30},
          990: {slidesPerView: 3.5, spaceBetween: 20},
          1024: {slidesPerView: 4, spaceBetween: 20}
        }}
        onSwiper={swiper => console.log(swiper)}
        className='w-100 d-flex position-relative '
        style={{height: '400px'}}
      >
        {PopularCarCardData.map((element, index) => {
          return (
            <SwiperSlide>
              <PopularCarCard key={index} name={element.name} type={element.type} image={element.image} sec={element.sec} maxSpeed={element.maxSpeed} enginType={element.enginType} salary={element.salary} />
            </SwiperSlide>
          );
        })}
        <div className='swiper-pagination '></div>
      </Swiper>
    </section>
  );
};

export default Popular;
