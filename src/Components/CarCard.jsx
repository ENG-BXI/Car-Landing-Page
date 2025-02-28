export default function CarCard(props) {
  return (
    <div style={{backgroundColor: 'var(--container-color)', flex: '1', width: '250px'}} className='popular-car-cards position-relative text-nowrap p-4 rounded-3 d-flex flex-column align-items-start'>
      <h3>{props.name}</h3>
      <h4>{props.type}</h4>
      <img style={{height: '90px'}} src={props.image} alt='popularImage' />
      {props.sec && props.maxSpeed && props.enginType && (
        <div className='car-data text-nowrap d-flex flex-wrap column-gap-3 '>
          <div style={{width: 'min-content'}} className='d-flex align-items-center column-gap-1'>
            <i className='ri-speed-up-fill fs-5'></i>
            <h6 className='mb-0'>{props.sec}</h6>
          </div>
          <div style={{width: 'min-content'}} className='d-flex align-items-center column-gap-1  '>
            <i className='ri-line-chart-line'></i>
            <h6 className=' mb-0'>{props.maxSpeed}</h6>
          </div>
          <div style={{width: 'min-content'}} className='d-flex align-items-center column-gap-1  '>
            <i className='ri-gas-station-line'></i>
            <h6 className=' mb-0'>{props.enginType}</h6>
          </div>
        </div>
      )}
      <div>
        <h5 className='mt-4'>{props.salary}</h5>
        <i className='shop-icon ri-shopping-bag-2-line'></i>
      </div>
    </div>
  );
}
