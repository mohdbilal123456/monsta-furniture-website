import React, { useState } from 'react'
import logo from '../assests/Images/logo.png'
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import myOrder from '../assests/Images/my-Order.jpg'
import '../assests/CSS/style.css'
import Slider from './Slider';
import Banner from './Banner';



export default function Header() {

  let [showCard, setShowCard] = useState(false);
  console.log(showCard)
  let [cart, setCart] = useState(false)
  console.log(cart)

  return (

    <>
      {
        showCard && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 cursor-crosshair "
            onClick={() => setShowCard(false)}
          />
        )}

      {
        cart && (
          <div
            className="fixed inset-0  bg-black opacity-50 z-40  cursor-pointer"

            onClick={() => setCart(false)}
          />
        )
      }
      
      {/* <div className="w-full   flex justify-around border-b-1  border-gray-200 "> */}
           
              <div className="sticky top-10 left-24  bg-white z-50 border border-black  flex justify-center items-center   xs:w-[37vw] md:w-[20vw] sm:w-[20vw]  lg:w-[10vw]">
                <img src={logo} alt="" className='  xs:w-[37vw] md:w-[20vw] sm:w-[20vw] lg:w-[10vw]' />
              </div>
     
      <div className="w-full flex justify-end">
      <div className='w-[60%] border border-black   md:flex  md:justify-center  xs:flex xs:justify-between sm:p-5 ' >
        <div className=' md:w-[50%] border border-black xs:w-[100%] xs:p-3  flex justify-between  items-center xs:py-3   lg:flex lg:justify-end  lg:gap-0 '>
          

          <div className='xs:flex md:flex md:justify-between xs:ml-2.5 flex justify-center items-center  gap-5 '>

            <form className=' hidden lg:w-[240px]  p-[3px] text-black  border border-gray-200 lg:flex justify-between items-center'>
              <input type="text" placeholder='search Product...' className='text-[12px] outline-hidden p-2 ' />
              <button className='flex justify-center items-center w-[30px] h-[30px]'>
                <CiSearch className='text-[22px]' />
              </button>
            </form>

            <span className='w-[30px] h-[30px] border border-gray-200 flex items-center justify-center '>
              {/* <CiHeart className='text-[26px] text-black cursor-pointer hover:text-[#C09578]  rounded-full ' /> */}
              <IoMdHeart
                className="text-[28px]  cursor-pointer hover:text-[#C09578] duration-200 text-black"
              />

            </span>

            <div className='relative p-2  flex justify-between items-center gap-6 border border-gray-200 text-black  cursor-pointer hover:text-[#C09578] duration-200' onClick={() => setCart(true)}>
              <div className='absolute left-[-15px] w-[25px] flex justify-center text-white  items-center bg-[#C09578] border-2 rounded-full'>0</div>
              <div className='border-r-gray-100   duration-200'>
                <IoMdCart className='text-[21px]  xs:text-[17px] ' />
              </div>
              <div className='sm:hidden xs:hidden  md:text-[15px] md:font-semibold md:flex md:justify-center  md:items-center md:gap-[3px] '>Rs. 00<IoIosArrowDown /></div>

            </div>

          </div>

          <div className={` lg:hidden z-30 xs:w-[34px] xs:h-[34px]  w-[50px] h-[50px] flex justify-center items-center border border-gray-300 cursor-pointer p-1  rounded-[5px] transition-transform duration-300 `} onClick={() => setShowCard(!showCard)}>
            <IoMenuOutline className='text-[30px] text-black'/>
          </div>

        </div>

      </div>
      </div>
      {/* </div> */}

      {/* Header Bottom Start */}

      <div className='  hidden lg:w-full  lg:flex justify-center py-2 border-b-1 border-gray-300'>
        <ul className='large:w-[80%] uppercase pb-2  flex justify-center  items-center  text-[#333333] text-[13px] font-semibold gap-12 '>
          <li className='text-[#C09578] cursor-pointer  w-[100px] h-[40px] flex justify-center items-center mt-2'>Home</li>
          <div className='relative group z-40'>
            <li className=' mt-2 w-[100px] h-[40px] flex justify-center items-center hover:text-[#C09578] cursor-pointer  hover:duration-300'>Living<IoIosArrowDown /></li>
            {/* <div className='absolute top-[90px] left-[0px] w-[500px] h-[300px] bg-gray-600  group-hover:rotate-0 transform:perspective origin-top duration-700'> */}
              {/* Dropdown content here */}
            {/* </div> */}
            <div className="drop-down  group z-50 flex ">
          
                <div className='p-6'>
                  <span>Living Storage</span>
                  <ul className='text-[#5A5A5A]   text-[12px] font-semibold flex flex-col gap-2 pt-2'>
                    <li>side and end table</li>
                    <li>Nest Table</li>
                    <li>Console Table</li>
                    <li>Coffee Table Set</li>
                    <li>Coffe Table</li>
                  </ul>
                </div>

                <div className='p-6'>
                  <span>Tables</span>
                  <ul className='text-[#5A5A5A]  text-[12px] font-semibold flex flex-col gap-2 pt-2'>
                    <li>Pair Unit</li>
                    <li>Display Unit</li>
                    <li>Shoe Rack</li>
                    <li>Chest of drawer</li>
                    <li>Cabinet and sidebar</li>
                    <li>Book Selves</li>
                    <li>TV Unit</li>
                  </ul>
                </div>
                <div className='p-6'>
                  <span>Mirror</span>
                  <ul className='text-[#5A5A5A]  text-[12px] font-semibold flex flex-col gap-2 pt-2'>
                    <li className='nowrap'>Wooden Mirror</li>
                  </ul>
                </div>
            </div>

          </div>

          <div className='relative group'>

            <li className='w-[100px] h-[40px] flex justify-center items-center gap-1.5 mt-2  hover:text-[#C09578] cursor-pointer  hover:duration-300'>Sofa<IoIosArrowDown /></li>
             <div className="drop-down z-50  flex ">
          
                <div className='p-5'>
                  <span>Sofa CUM BED</span>
                  <ul className='text-[#5A5A5A]  text-[12px] font-semibold flex flex-col gap-2 pt-3.5'>
                    <li>wooden sofa cum bed</li>
                  </ul>
                </div>

                <div className='p-5'>
                  <span>SOFA SET</span>
                  <ul className='text-[#5A5A5A]  text-[12px] font-semibold flex flex-col gap-2 pt-3.5'>
                    <li>L Shape Sofa</li>
                    <li>1 seater Sofa</li>
                    <li>2 Seater Sofa</li>
                    <li>3 Seater Sofa</li>
                    <li>Wooden Sofa Sets</li>
                  </ul>
                </div>
                <div className='p-5'>
                  <span>SWING JHULA</span>
                  <ul className='text-[#5A5A5A]  text-[12px] font-semibold flex flex-col gap-2 pt-3.5'>
                    <li className='nowrap'>Wooden Jhula</li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className='relative group' >

            <li className='w-[100px] h-[40px] flex justify-center items-center mt-2 hover:text-[#C09578] cursor-pointer  hover:duration-300'>Pages<IoIosArrowDown /></li>
            
            <div className='drop-down z-50 p-4' style={ { width:'190px', height:'180px' } }>
              <ul className='flex flex-col  gap-5'>
                <li>About Us</li>
                <li>Cart</li>
                <li>Check Out</li>
                <li>Frequently Questions</li>
              </ul>
            </div>


          </div>
          <li className='flex justify-center items-center gap-1.5 mt-2 hover:text-[#C09578] cursor-pointer  hover:duration-300'>contact us<IoIosArrowDown /></li>
        </ul>
      </div>
      {/* Header Bottom End */}


      <div className=' w-full  duration-700 '>


        <div className={`fixed left-0 top-0  sm:w-[40%] xs:w-[80vw] h-[100vh] z-50   bg-white transition-all  duration-300 ${showCard ? 'translate-x-0' : 'translate-x-[-100%]'}`} onClick={() => showCard ? setShowCard(false) : ''}>
          <span className=' cursor-pointer absolute right-[25px] top-[15px] p-1.5 w-[30px] h-[30px] border border-gray-500 flex justify-center items-center rounded-[100%]' >
            <IoMdClose className='text-[20px] text-gray-400' />
          </span>
          <div className='w-full mt-10 flex  flex-col gap-10'>
            <div className=' w-full xs:flex  xs:flex-col  xs:items-center gap-4 mt-[60px] text-[13px] text-[#333333] font-semibold'>
              <span>contact us 24/7 : +91-98745612330 </span>
              <span> furnitureinfo@gmail.com</span>
            </div>
            <div className='flex  '>
              <div className='w-full uppercase  px-9 text-[#5A5A5A] text-[13px] font-semibold gap-12'>
                <div className=' cursor-pointer  py-2.5 border-b border-gray-200'>Home</div>
                <div className='flex justify-between items-center gap-1.5 py-2.5 border-b border-gray-200  hover:text-[#C09578] cursor-pointer  hover:duration-300'>Sofa<IoIosArrowDown /></div>
                <div className='flex justify-between items-center gap-1.5 py-2.5 border-b border-gray-200  hover:text-[#C09578] cursor-pointer  hover:duration-300'>Pages<IoIosArrowDown /></div>
                <div className='flex justify-between items-center gap-1.5 py-2.5 border-b border-gray-200  hover:text-[#C09578] cursor-pointer  hover:duration-300'>contact us<IoIosArrowDown /></div>
                <div className='flex justify-between items-center gap-1.5 py-2.5 border-b border-gray-200  hover:text-[#C09578] cursor-pointer  hover:duration-300'>Living<IoIosArrowDown /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full min-h-[100%]'>
        <div className={`fixed top-0 right-0 z-50 bg-white lg:w-[23%] md:w-[40%] sm:w-[50%] h-full p-3 transition-all duration-300 ${cart ? 'translate-x-0' : 'translate-x-[100%]'} `}>
          <div className='flex justify-between text-[#5A5A5A]  font-[500] p-6 border-[#5A5A5A] border-b '>
            <span className='text-[20px]'>Cart</span>
            <span className='text-[23px] cursor-pointer' onClick={() => setCart(false)}><IoMdClose /></span>
          </div>

          <div className="py-10 flex justify-center">
            <img src={myOrder} alt="" />
          </div>

          <div className='flex justify-center py-4 text-black text-[13px] border-t border-b border-gray-300'>
            <p>Your shopping cart is empty!</p>
          </div>
        </div>
      </div>

      <Slider/>
      <Banner/>

    </>
  )
}