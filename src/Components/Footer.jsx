import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import p9 from '../assests/Images/p9.jpg'
import p10 from '../assests/Images/p10.jpg'
import footerImg from '../assests/Images/footer-img.png'
export default function Footer() {
  return (
    <footer className="w-full bg-white text-black pt-12 px-6 md:px-16">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b-1 border-[#5a5a5a1e] pb-8">
        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Address: Claritas est etiam processus dynamicus</p>
          <p>Phone: 98745612330</p>
          <p>Email: furnitureinfo@gmail.com</p>
          <div className="flex items-center space-x-3 mt-4 cursor-pointer ">
            <IconWrapper><FaFacebookF /></IconWrapper>
            <IconWrapper><FaInstagram /></IconWrapper>
            <IconWrapper><FaTwitter /></IconWrapper>
            <IconWrapper><FaLinkedinIn /></IconWrapper>
            <IconWrapper><FaYoutube /></IconWrapper>
            <IconWrapper><FaTelegramPlane /></IconWrapper>
          </div>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-xl font-bold mb-4">Information</h2>
          <ul className="space-y-2 cursor-pointer  ">
            <li className='hover:text-[#c09578]'>About Us</li>
            <li className='hover:text-[#c09578]'>Contact Us</li>
            <li className='hover:text-[#c09578]'>Frequently Questions</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h2 className="text-xl font-bold mb-4">My Account</h2>
          <ul className="space-y-2 cursor-pointer">
            <li className='hover:text-[#c09578]'>My Dashboard</li>
            <li className='hover:text-[#c09578]'>Wishlist</li>
            <li className='hover:text-[#c09578]'>Cart</li>
            <li className='hover:text-[#c09578]'>Checkout</li>
          </ul>
        </div>

        {/* Top Rated Products */}
        <div>
          <h2 className="text-xl font-bold mb-4">Top Rated Products</h2>
          <div className="space-y-4 cursor-pointer">
            <ProductCard 
              title="Hrithvik Stool" 
              category="Side and End Tables"
              oldPrice="7,000" 
              newPrice="6,000"
              image={p9} 
            />
            <ProductCard 
              title="Godfrey Coffee Table Set" 
              category="Coffee Table Sets"
              oldPrice="3,000" 
              newPrice="2,200"
              image={p10}
            />
          </div>
        </div>
      </div>

      {/* Bottom links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 cursor-pointer py-6  border-b-1 border-[#5a5a5a1e] ">
        <a href="#">Home</a>
        <a href="#">Online Store</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms Of Use</a>
      </div>

      {/* Copyright & Payments */}
      <div className="flex flex-col justify-center  items-center gap-2.5 py-6">
        <p>All Rights Reserved By Furniture | © 2025</p> 
        <div className="flex gap-4 mt-4 md:mt-0">
          <img src={footerImg} alt="Visa" className="h-6" />
         
        </div>
      </div>
    </footer>
  );
}

function IconWrapper({ children }) {
  return (
    <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:text-[#c09578] hover:border-[#c09578] transition">
      {children}
    </div>
  );
}

function ProductCard({ title, category, oldPrice, newPrice, image }) {
  return (
    <div className="flex items-start gap-4 border-b-1 border-[#5a5a5a1e] pb-3">
      <img src={image} alt={title} className="w-16 h-16 object-cover" />
      <div>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-[#1f365c] font-semibold hover:text-[#c09578] cursor-pointer">{title}</p>
        <p>
          <span className="line-through text-gray-500 mr-2">Rs. {oldPrice}</span>
          <span className="text-[#c09578] font-bold">Rs. {newPrice}</span>
        </p>
      </div>
    </div>
  );
}
