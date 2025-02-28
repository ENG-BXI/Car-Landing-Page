import React from 'react';
import CarCard from '../../../Components/CarCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {Pagination , Autoplay} from 'swiper/modules';

const Featured = () => {
  let CarData = [
    {name: 'Tesla', type: 'Model X', image: require('../../../assets/img/featured1.png'), salary: '$98,900'},
    {name: 'Tesla', type: 'Model 3', image: require('../../../assets/img/featured2.png'), salary: '$45,900'},
    {name: 'Audi', type: 'E-tron', image: require('../../../assets/img/featured3.png'), salary: '$175,900'},
    {name: 'Porsche', type: 'Boxster 987', image: require('../../../assets/img/featured4.png'), salary: '$126,900'},
    {name: 'Porsche', type: 'Panamera', image: require('../../../assets/img/featured5.png'), salary: '$126,900'}
  ];
  return (
    <section id='featured' className='featured container  text-center mb-0'>
      <h2 className='mb-5'>Featured Luxury Cars</h2>
      <Swiper
        autoplay={{delay: 3000}}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets'
        }}
        modules={[Pagination, Autoplay]}
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
        className='featured-cars w-100 d-flex position-relative '
        style={{height: '350px'}}
      >
        {CarData.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <CarCard key={index} name={element.name} type={element.type} image={element.image} salary={element.salary} />
            </SwiperSlide>
          );
        })}
        <div className='swiper-pagination'></div>
      </Swiper>
    </section>
  );
};

export default Featured;
