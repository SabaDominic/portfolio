import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner-bg.jpeg)] bg-cover'
    style={{backgroundSize: "25%" ,backgroundPosition: "left 100px top 100px"}}
    >
      <Navbar />
      <div className='container gri lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[90px] sm:text-[60px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Saba</p>
            <p data-aos="zoom-in-up">Dominic</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
