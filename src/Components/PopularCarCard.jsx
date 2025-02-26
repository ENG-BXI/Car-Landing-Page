import {SwiperSlide} from 'swiper/react';
export default function PopularCarCard(props) {
  return (
    <div style={{backgroundColor: 'var(--container-color)', flex:"1", width: '250px'}} className='popular-car-cards position-relative text-nowrap p-4 rounded-3 d-flex flex-column'>
      <h3>{props.name}</h3>
      <h4>{props.type}</h4>
      <img src={props.image} alt='popularImage' />
      <div className='car-data text-nowrap d-flex flex-wrap column-gap-3 mb-4'>
        <div style={{width: 'min-content'}} className='d-flex align-items-center column-gap-1'>
          <i class='ri-speed-up-fill fs-5'></i>
          <h6 className='mb-0'>{props.sec}</h6>
        </div>
        <div style={{width: 'min-content'}} className='d-flex align-items-center column-gap-1  '>
          <i class='ri-line-chart-line'></i>
          <h6 className=' mb-0'>{props.maxSpeed}</h6>
        </div>
        <div style={{width: 'min-content'}} className='d-flex align-items-center column-gap-1  '>
          <i class='ri-gas-station-line'></i>
          <h6 className=' mb-0'>{props.enginType}</h6>
        </div>
      </div>
      <div>
        <h5>{props.salary}</h5>
        <i class='shop-icon ri-shopping-bag-2-line'></i>
      </div>
    </div>
  );
}
