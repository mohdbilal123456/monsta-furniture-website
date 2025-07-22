import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import productBanner from '../assests/Images/productBanner.jpg'
import productImages from '../data/productData.js'
import img1 from '../assests/Images/p-1.jpg'
import SlickSliderProduct from './SlickSLiderProduct.jsx';
import { LuCircleCheckBig } from "react-icons/lu";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoClock } from "react-icons/go";

import '../assests/CSS/style.css'
import CustomerSlider from './CustomerSlider.jsx';
import NewsSection from './NewsSection.jsx';
import Footer from './Footer.jsx';


export default function Home() {

      const tabs = ['Featured', 'New Arrival', 'On Sale'];
      const [selected, setSelected] = useState('Featured');
      return (
            <>
                  {/* <div className="w-full xs:flex xs:justify-center py-6">
            <div className="w-[500px] h-[50px] xs:flex xs:justify-center md:flex lg:flex md:flex-row  xs:flex-col cursor-pointer border border-gray-300 mt-8 ">
                  <div className='w-[166px] h-[50px] flex justify-center items-center sm:border sm:border-gray-300 '>
                        <span className='text-[#000] text-2xl ' >Featured</span>
                  </div>
                  <div className='w-[166px] h-[50px] flex justify-center items-center border border-gray-300 '>
                        <span className='text-[#000] text-2xl ' >New Arrival</span>
                  </div>
                  <div className='w-[166px] h-[50px] flex justify-center items-center border border-gray-300 '>
                        <span className='text-[#000] text-2xl'>OnSale</span>
                  </div>
            </div>
      </div> */}







                  <div className="w-full flex justify-center">
                        <div className="w-[80%] mt-10 py-4 flex  flex-col  md:flex-col md:items-center md:justify-center lg:flex-row lg:gap-0 lg:justify-center">
                              
                                    {
                                    tabs.map((tab) => (
                                          <div className=" lg:mx-0 xs:mx-auto xs:py-1 ">
                                          <div key={tab} onClick={() => setSelected(tab)} className={` min-w-[240px]  max-w-[240px] h-[50px] flex justify-center items-center cursor-pointer  py-[10px] text-lg sm:text-xl font-bold transition-all duration-200 ${selected === tab ? 'border-2 border-[#c09578] text-[#c09578] font-semibold' : 'border border-[#ccc] text-black'
                                                }`}
                                          >
                                                <span className="capitalize">{tab}</span>
                                          </div>
                                           </div>
                                    ))}

                             
                        </div>
                  </div>


                  {/* Products Start */}


                  <div className="w-full  flex justify-center py-5 ">
                        <div className="w-[80%] py-4  flex justify-center  ">
                              <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-2.5 ">
                                    {


                                          productImages.filter((v) => v.tab === selected).map((v) => {

                                                return (

                                                      <div className='w-[100%] bg-[#ffffff] shadow-2xl rounded-[8px] flex  flex-col items-center justify-center text-black '>
                                                            <div className="w-[100%] rounded-[8px] cursor-pointer ">
                                                                  <img src={v.img} alt="" className='rounded-[8px] object-cover' />
                                                            </div>
                                                            <div className="w-[70%] py-4  flex justify-center flex-col items-center gap-1 border-b border-gray-200 ">
                                                                  <span className='text-[#5A5A5A] text-[13px] font-[500] '>{v.category}</span>
                                                                  <span className='text-[15px] text-nowrap hover:text-[#c09578] cursor-pointer duration-300 font-semibold '>{v.name}</span>
                                                            </div>
                                                            <div className="py-3 flex gap-3">
                                                                  <span className='line-through text-[#5A5A5A] '>Rs. {v.discountedPrice}</span>
                                                                  <span className='text-[#c09578] font-bold ' >Rs. {v.originalPrice}</span>
                                                            </div>
                                                            <div className='flex gap-4 py-5 '>
                                                                  <span className='w-[45px] h-[45px] p-3  flex justify-center items-center text-black bg-gray-200 hover:bg-[#C09578] duration-300 cursor-pointer ' ><FaRegHeart className='text-black text-xl sm:text-2xl font-bold' /></span>
                                                                  <button className='py-3 px-5 bg-gray-200 flex justify-center items-center hover:bg-[#C09578] duration-300 cursor-pointer '>Add To Cart</button>

                                                            </div>
                                                      </div>
                                                )



                                          })
                                    }



                              </div>

                        </div>
                  </div>


                  <div className=" relative w-[100%] cursor-pointer group mt-3 ">
                        <img src={productBanner} alt="" className='object-cover w-full h-[500px] ' />
                        <div className="absolute top-[130px] left-4 sm:left-10 md:left-20 lg:left-40 flex flex-col gap-2.5  text-black transform transition-transform duration-200 ease-in-out group-hover:scale-105 hover:translate-x-2 origin-right ">
                              <span className='text-[50px] text-[#242424] font-[700] '>New Trending Collection</span>
                              <span className='text-[16px] text-[#5A5A5A] ' >We Believe That Good Design is Always in Season</span>
                              <button className=' w-[200px] h-[50px] text-[#c09578] cursor-pointer text-[14px] font-semibold mt-3  border-2  border-[#c09578] py-3 px-4 hover:text-white hover:bg-[#c09578] ease-in-out duration-500 transition-all '>Shopping Now</button>
                        </div>


                  </div>

                  {/* Product End */}
                  <SlickSliderProduct />
                  {/* <div className="w-full py-4 flex justify-center  mt-6">
                        <div className='w-[80%] border-2 border-black '>
                              <span className='text-black text-[26px] font-bold '>Best Selling Products</span>
                              <div className=" mt-8 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
                                    <div className='w-[100%] bg-[#ffffff] shadow-2xl rounded-[8px] flex  flex-col items-center justify-center text-black '>
                                          <div className="w-[100%] rounded-[8px] cursor-pointer ">
                                                <img src={img1} alt="" className='rounded-[8px] object-cover' />
                                          </div>
                                          <div className="w-[70%] py-4  flex justify-center flex-col items-center gap-1 border-b border-gray-200 ">
                                                <span className='text-[#5A5A5A] text-[13px] font-[500] '></span>
                                                <span className='text-[15px] text-nowrap hover:text-[#c09578] cursor-pointer duration-300 font-semibold '></span>
                                          </div>
                                          <div className="py-3 flex gap-3">
                                                <span className='line-through text-[#5A5A5A] '>Rs. </span>
                                                <span className='text-[#c09578] font-bold ' >Rs. </span>
                                          </div>
                                          <div className='flex gap-4 py-5 '>
                                                <span className='w-[45px] h-[45px] p-3  flex justify-center items-center text-black bg-gray-200 hover:bg-[#C09578] duration-300 cursor-pointer ' ><FaRegHeart className='text-black text-[60px] font-bold ' /></span>
                                                <button className='py-3 px-5 bg-gray-200 flex justify-center items-center hover:bg-[#C09578] duration-300 cursor-pointer '>Add To Cart</button>

                                          </div>
                                    </div>

                              </div>

                        </div>
                  </div> */}



                  {/* Free Shiping , Money return , OnLine Support Start */}
                  <div className="w-full flex justify-center py-5  border-2 border-[#F8F9F9] bg-[#F8F9F9]">


                        <div className=" w-[80%]  ">
                              <div className="grid grid-cols-1 md:grid-cols-3 ">
                                    <div className="flex flex-col items-center gap-3 py-5 ">
                                          <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-black rounded-full ">
                                                <FaGlobeAmericas className='text-2xl text-[#5A5A5A]' />
                                          </div>
                                          <span className='text-[17px] text-[#242424] font-[700]  '>Free Shipping</span>
                                          <span className='text-[15px] text-[#5A5A5A] ' >Free Shipping On all Order</span>
                                    </div>
                                     <div className="flex flex-col items-center gap-3 py-5 ">
                                          <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-black rounded-full ">
                                                <LuCircleCheckBig className='text-2xl text-[#5A5A5A]' />
                                          </div>
                                          <span className='text-[17px] text-[#242424] font-[700]  '>Free Shipping</span>
                                          <span className='text-[15px] text-[#5A5A5A] ' >Free Shipping On all Order</span>
                                    </div>
                                     <div className="flex flex-col items-center gap-3 py-5 ">
                                          <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-black rounded-full ">
                                                <GoClock  className='text-2xl text-[#5A5A5A]  ' />
                                          </div>
                                          <span className='text-[17px] text-[#242424] font-[700]  '>Free Shipping</span>
                                          <span className='text-[15px] text-[#5A5A5A] ' >Free Shipping On all Order</span>
                                    </div>
                              </div>
                        </div>


                  </div>
                  {/* Free Shiping , Money return , OnLine Support End  */}



                  {/* Customer Slider Start */}

                  {/* <div className="w-full my-5 flex justify-center ">
                       <div className="w-[80%] py-4 border border-black ">
                              <span className='text-[24px] text-[#242424] font-[700] text-center  '><p>What Our Custumers Say ?</p></span>




                       </div>

                  </div> */}
                  <CustomerSlider/>
                  <NewsSection/>
                  <Footer/>

                  {/* Customer Slider End */}

            </>
      )
}
