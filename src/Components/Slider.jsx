import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../assests/Images/slider-1.jpg'
import slider2 from '../assests/Images/slider-2.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assests/CSS/style.css'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
