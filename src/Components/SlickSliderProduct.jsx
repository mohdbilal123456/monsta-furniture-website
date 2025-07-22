import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../data/productData.js";
import { FaRegHeart } from "react-icons/fa";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
      <div
            onClick={onClick}
            className="absolute -top-[53px] right-0 text-gray-400 hover:text-[#c09578] text-2xl z-20 cursor-pointer"
      >
            ❯
      </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
      <div
            onClick={onClick}
            className="absolute -top-[53px] right-8 text-gray-400 hover:text-[#c09578] text-2xl z-20 cursor-pointer"
      >
            ❮
      </div>
);

const SlickSliderProduct = () => {
      const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                  {
                        breakpoint: 1280,
                        settings: { slidesToShow: 4 },
                  },
                  {
                        breakpoint: 1024,
                        settings: { slidesToShow: 3 },
                  },
                  {
                        breakpoint: 768,
                        settings: { slidesToShow: 2 },
                  },
                  {
                        breakpoint: 480,
                        settings: { slidesToShow: 1 },
                  },
            ],
      };

      return (
            <div className="w-full flex justify-center">
                  <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] py-6 mt-9 px-2 sm:px-4 relative">
                        {/* Title and Line */}
                        <div className="relative mb-6">
                              <div className="flex items-center">
                                    <h2 className="text-xl sm:text-2xl text-black font-bold whitespace-nowrap mr-4">
                                          Bestselling Products
                                    </h2>
                                    <div className="xl:w-[76%] lg:w-[60%] md:w-[50%] sm:w-[44%] xs:w-[10%] sx:w-[19%] lx:w-[29%] h-[1px] bg-gray-300" />
                              </div>


                        </div>

                        {/* Product Slider */}
                        <Slider {...settings}>
                              {products.map((product) => (
                                    <div key={product.id} className="p-2 h-full">
                                          <div className="bg-white rounded shadow-md p-4 h-full flex flex-col">
                                                {/* Image */}
                                                <img
                                                      src={product.img}
                                                      alt={product.name}
                                                      className="h-[180px] w-full object-cover rounded mb-3"
                                                />

                                                {/* Text Content */}
                                                <div className="flex-grow">
                                                      <p className="text-xs sm:text-sm text-gray-500">{product.category}</p>
                                                      <h3 className="text-base sm:text-lg font-semibold">{product.name}</h3>
                                                      <div className="mt-2">
                                                            <span className="line-through text-gray-400 mr-2 text-sm">
                                                                  Rs. {product.discountedPrice.toLocaleString()}
                                                            </span>
                                                            <span className="text-[#c09578] font-bold text-sm">
                                                                  Rs. {product.originalPrice.toLocaleString()}
                                                            </span>
                                                      </div>
                                                </div>

                                                {/* Buttons */}
                                                <div className="flex items-center justify-center gap-3 mt-4">
                                                      <span className="w-[40px] h-[35px] flex justify-center items-center text-black bg-gray-200 hover:bg-[#C09578] duration-300 cursor-pointer">
                                                            <FaRegHeart className="text-lg sm:text-xl" />
                                                      </span>
                                                      <button className="text-xs sm:text-sm px-3 py-2 font-semibold bg-[#cccccc50] text-[#5A5A5A] hover:bg-[#c09578] hover:text-[#5A5A5A] cursor-pointer transition">
                                                            Add To Cart
                                                      </button>
                                                </div>
                                          </div>
                                    </div>

                              ))}
                        </Slider>
                  </div>
            </div>
      );
};

export default SlickSliderProduct;
