import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import img1 from '../assests/Images/customer-1.jpg'
import img2 from '../assests/Images/customer-2.jpg'
import img3 from '../assests/Images/customer-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const data = [
      {
            img: img1,
            heading: 'These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Supportteam ever! Very fast responding! Thank you very much! | highly recommend this theme and these people!',
            name: 'KATHY YOUNG',
            ceo: 'CEO of Sun Park',
      },
      {
            img: img2,
            heading: 'These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Supportteam ever! Very fast responding! Thank you very much! | highly recommend this theme and these people!',
            name: 'KATHY YOUNG',
            ceo: 'CEO of Sun Park',
      },
      {
            img: img3,
            heading: 'These guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Supportteam ever! Very fast responding! Thank you very much! | highly recommend this theme and these people!',
            name: 'KATHY YOUNG',
            ceo: 'CEO of Sun Park',
      },

]

export default function CustomerSlider({ rating = 5 }) {
      let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
      };
      return (
            <>
                  <div className="w-full flex justify-center ">
                        <div className="w-[60%] py-5 ">
                              <span className='text-[24px] text-[#242424] font-[700] text-center '><p>What Our Custumers Say ?</p></span>
                        </div>
                  </div>


                  <Slider {...settings}>
                        
                        {
                        data.map((v, i) => (
                              <div key={i}>
                                    <div className="w-[51%] p-5 mx-auto border  bg-white">
                                          <p className="text-[#5A5A5A] font-[500] text-center">{v.heading}</p>

                                          <div className="w-full py-3.5 flex justify-center">
                                                <img src={v.img} alt={v.name} className="w-24 h-24 rounded-full object-cover"/>
                                          </div>

                                          <div className="text-[#5A5A5A] text-center py-2.5">{v.name}</div>
                                          <div className="text-center text-sm text-gray-500">{v.ceo}</div>

                                          <div className="w-full py-3 flex justify-center">
                                                {[...Array(5)].map((_, index) => (
                                                      <FontAwesomeIcon
                                                            key={index}
                                                            icon={faStar}
                                                            className={`text-xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                                      />
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        ))}
                        
                  </Slider>

            </>
      )
}
