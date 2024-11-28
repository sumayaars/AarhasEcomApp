import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slider1 from '../assets/Slider1.webp';
import Slider2 from '../assets/Slider2.webp';
import Slider3 from '../assets/Slider3.jpeg';



export default function ShopSlider() {
  return (
    <>
 <Swiper
      spaceBetween={0}
      slidesPerView={1}
      
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
    loop={true}
      modules={[Autoplay]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
     
     <SwiperSlide><img className='w-[60%] mx-auto h-[500px] mt-10 mb-10' src={Slider1} alt="" /></SwiperSlide>
     <SwiperSlide><img className='w-[60%] mx-auto h-[500px] mt-10 mb-10' src={Slider2} alt="" /></SwiperSlide>
     <SwiperSlide><img  className='w-[60%] mx-auto h-[500px] mt-10 mb-10' src={Slider3} alt="" /></SwiperSlide>
 
     
    
    </Swiper>
    </>
  )
}
