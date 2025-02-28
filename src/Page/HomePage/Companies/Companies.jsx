import React from 'react'
import './Companies.css';
const Companies = () => {
    let CompaniesData = [
        require("../../../assets/img/logo1.png"),
        require("../../../assets/img/logo2.png"),
        require("../../../assets/img/logo3.png"),
        require("../../../assets/img/logo4.png"),
        require("../../../assets/img/logo5.png"),
        require("../../../assets/img/logo6.png"),
    ]
  return (
      <section id='companies' style={{height:"200px"}} className='companies container mx-auto align-content-center justify-content-center row row-gap-5'>
         {CompaniesData.map((element,index)=><div key={index} className='companies-logo col-4 col-md-3 col-lg-2 text-center'><img className='logo-image'   key={index} src={element} alt="LogoImage" /></div>)}
    </section>
  )
}

export default Companies;