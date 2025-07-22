import React from 'react'
import img1 from '../assests/Images/1.webp'
import img2 from '../assests/Images/2.webp'
import Home from './Home'
// import img3 from '../assests/Images/3.webp'

const images = [
      {
            img: img1,
            title: 'Design Creative',
            heading: 'Chair Collection'
      },
      {
            img: img2,
            title: 'Design Creative',
            heading: 'Best Selling Product'
      },
      {
            img: img1,
            title: 'On Sale Product',
            heading: 'Chair Collection'
      }
]

export default function Banner() {
      return (
            <>

                  <div className="w-full  flex justify-center ">
                        <div className="w-[90%] mt-10 gap-3 grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2">
                              {
                                    images.map((v) => {
                                          return (
                                                <div className="relative cursor-pointer overflow-hidden group ">
                                                      <img src={v.img} alt="" className='transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                                                      <div className='absolute top-[40px] left-[60px] text-[#0000008c] font-semibold flex flex-col'>
                                                            <span className='text-[14px]'>{v.title}</span>
                                                            <span className='text-xl'> {v.heading} </span>
                                                      </div>
                                                </div>
                                          )

                                    })
                              }
                             
                        </div>
                  </div>



                  <Home />
            </>
      )
}
