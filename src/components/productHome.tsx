"use client";

import Image from "next/image";
import product1 from "/public/assets/product1.png";
import product2 from "/public/assets/product2.png";
import product3 from "/public/assets/product3.png";
import product4 from "/public/assets/product4.png";
import heartWhite from "/public/assets/heartWhite.png";
import heartRed from "/public/assets/heartRed.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md"
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineMinimize } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import "swiper/css/navigation";
import { Pagination ,Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ProductsHome = [
  {
    src: product1,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: true,
  },
  {
    src: product2,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: false,
  },
  {
    src: product3,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: true,
  },
  {
    src: product4,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: false,
  },
  {
    src: product3,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: true,
  },
  {
    src: product4,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: false,
  },
  {
    src: product3,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: true,
  },
  {
    src: product4,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250",
    newPrice: "200",
    buttonText: "15% off",
    outStock: false,
  },
];

interface IProductHome {
  titleProductCategory: string;
}

const ProductHome = ({ titleProductCategory }: IProductHome) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [counts, setCounts] = useState(Array(ProductsHome.length).fill(1));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [activeHearts, setActiveHearts] = useState(
    Array(ProductsHome.length).fill(false)
  );

  const [activeCart, setActiveCart] = useState(
    Array(ProductsHome.length).fill(false)
  );


  const handleIncrement = (index: number) => {
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
  };

  const handleDecrement = (index: number) => {
    setCounts(
      counts.map((count, i) => (i === index && count > 0 ? count - 1 : count))
    );
  };

  const handleActiveIconHeart = (index: number) => {
    setActiveHearts(
      activeHearts.map((active, i) => (i === index ? !active : active))
    );
  };

  const handleActiveCart = (index: number) => {
    // Toggle the active cart state
    setActiveCart(
      activeCart.map((active, i) => (i === index ? !active : active))
    );

    // Set a timeout to revert the button state after 1 second
    const id = window.setTimeout(() => {
      setActiveCart(
        activeCart.map((active, i) => (i === index ? false : active))
      );
    }, 1000);

    setTimeoutId(id); // Save timeout ID for later clearing
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the timeout if the user hovers over the button
      setTimeoutId(null); // Reset the timeout ID
    }
  };

  const handleMouseLeave = (index: number) => {
    // Re-trigger the timeout on mouse leave if not already active
    const id = window.setTimeout(() => {
      setActiveCart(
        activeCart.map((active, i) => (i === index ? false : active))
      );
    }, 3000);

    setTimeoutId(id);
  };

  console.log(windowWidth)
  return (
    <div className="product-home relative container mx-auto px-4 py-5 sm:px-6 lg:px-8 flex items-center">
      <div className="row-all w-full flex flex-wrap">
        <div className="relative w-full flex items-center mb-5 pl-3">
          <span className="font-medium lg:text-3xl text-xl text-blackText">{titleProductCategory}</span>
          <button className="text-primary text-base font-normal rounded-md lg:px-6 px-4 lg:py-2 py-1 mr-3 border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out absolute right-0 cursor-pointer">
            See All
          </button>
        </div>
        <Swiper
          slidesPerView={6}
          slidesPerGroup={6} // Move 4 slides on each click
          spaceBetween={1}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup:2
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
              slidesPerGroup:4
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 2,
              slidesPerGroup:6
            },
          }}
          modules={[Pagination,Navigation]}
          className="mySwiper"
        >


          {ProductsHome.map((Product, index) => (
            <SwiperSlide
              key={index}
              className="p-1"
            >
              <div className="product-content bg-white border-2 border-solid border-lightGrayColor rounded-md p-3">
                <div className="img-product-home  relative flex justify-center">
                  <Image
                    src={Product.src}
                    className="m-5 mt-7"
                    width={200}
                    height={200}
                    alt="product-home"
                  />
                  {/* cart */}
                  <div
                    className={`add-to-cart ${activeCart[index] && !Product.outStock ? 'w-[80%]' : 'w-auto'} bg-white group hover:bg-primary transition-all duration-500 ease-in-out absolute bottom-3  right-0 drop-shadow-custom rounded-lg`}
                  >
                    {Product.outStock ? (<div><button
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="text-primary lg:text-base text-sm p-2 font-normal justify-center items-center  w-full h-full rounded-md flex  hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
                        >
                          
                          Notify Me
                        </button></div>) 
                    :
                    activeCart[index]? (
                      <button
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={() => handleMouseLeave(index)}
                        className="text-primary transition-all group duration-500 ease-in-out text-base font-normal justify-center items-center w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white cursor-pointer"
                      >
                        <span
                          className="flex justify-center items-center mx-1 cursor-pointer"
                          onClick={() => handleDecrement(index)}
                        >
                          <MdOutlineMinimize
                            className={`transition-all duration-500 ease-in-out text-xl  mb-3  text-primary group-hover:text-white
                              `}
                          />
                        </span>
                        <span className="flex grow justify-center items-center cursor-pointer">
                          <span className="text-xl font-bold">{counts[index]}</span>
                        </span>
                        <span
                          className="flex justify-center items-center me-1 cursor-pointer"
                          onClick={() => handleIncrement(index)}
                        >
                          <GoPlus
                            className={`transition-all duration-500 ease-in-out text-xl  text-primary group-hover:text-white
                              `}
                          />
                        </span>
                      </button>
                    ) : (
                      <button
                        className="add-to-cart bg-white hover:bg-primary transition-colors duration-500 ease-in-out p-2 right-0 drop-shadow-custom rounded-lg"
                        onClick={() => handleActiveCart(index)}
                      >
                        <MdAddShoppingCart className="text-2xl text-primary group-hover:text-white" />
                      </button>
                    )}


                  </div>

                  {/* heart */}
                  <div className="absolute top-0 w-full flex items-center">
                    <button
                      className={`text-white text-sm font-normal rounded-md px-3 py-1  cursor-pointer ${Product.outStock ? "bg-[#F13A3A]" : "bg-secondary"
                        }`}
                    >
                      {Product.outStock ? "Out of Stock" : "15% off"}
                    </button>
                    <span
                      className={`font-medium text-sm text-blackText absolute right-0 p-2 bg-white drop-shadow-custom  rounded-lg ${Product.outStock ? "hidden" : "block"
                        }`}
                      onClick={() => handleActiveIconHeart(index)}
                    >
                      <Image
                        src={activeHearts[index] ? heartRed : heartWhite}
                        className="cursor-pointer"
                        width={20}
                        height={20}
                        alt="product-home"
                      />
                    </span>
                  </div>
                </div>
                <div className="caption-product-home  ">
                  <h3 className="lg:text-[.8rem] text-xs text-blackSubText font-semibold">
                    {Product.title}
                  </h3>
                  {/* Div With Price */}
                  <div className="my-2 ">
                    <span className="lg:text-xl text-sm text-secondary font-bold">
                      {Product.newPrice}
                      <span className="text-xs font-medium">SAR</span>
                    </span>
                    <span className="lg:text-xl text-xs text-graySubText font-normal lg:mx-3 ml-1 line-through">
                      {Product.olPrice}
                      
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute top-1/2 bg-white drop-shadow-custom p-2 rounded-full -translate-y-1/2 z-20 left-5 cursor-pointer">
        
        <FaArrowLeft />
      </div>
      <div className="swiper-button-next  absolute top-1/2 -translate-y-1/2  bg-white drop-shadow-custom p-2 rounded-full z-20 right-5 cursor-pointer">
        
        <FaArrowRight />
      </div>
      </div>
    </div>
  );
};

export default ProductHome;
