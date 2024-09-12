"use client";

import Image from "next/image";
import product1 from "/public/assets/product1.png";
import product2 from "/public/assets/product2.png";
import product3 from "/public/assets/product3.png";
import product4 from "/public/assets/product4.png";
import heartWhite from "/public/assets/heartWhite.png";
import heartRed from "/public/assets/heartRed.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineMinimize } from "react-icons/md";

const ProductsHome = [
  {
    src: product1,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250 SR",
    newPrice: "200 SR",
    buttonText: "15% off",
    outStock: true,
  },
  {
    src: product2,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250 SR",
    newPrice: "200 SR",
    buttonText: "15% off",
    outStock: false,
  },
  {
    src: product3,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250 SR",
    newPrice: "200 SR",
    buttonText: "15% off",
    outStock: true,
  },
  {
    src: product4,
    title: "ALSANIDI, Plastic Gallon 3*1, Water Gallon, Sandy, capacity 20 ...",
    olPrice: "250 SR",
    newPrice: "200 SR",
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
  const [activeHearts, setActiveHearts] = useState(
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

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine how many items to show based on screen width
  const itemsToShow = windowWidth >= 768 ? 4 : 2;

  return (
    <div className="product-home container mx-auto px-4 py-5 sm:px-6 lg:px-8 flex items-center">
      <div className="row-all w-full flex flex-wrap">
        <div className="relative w-full flex items-center mb-5 pl-3">
          <span className="font-medium lg:text-3xl text-xl text-blackText">{titleProductCategory}</span>
          <button className="text-primary text-base font-normal rounded-md lg:px-6 px-4 lg:py-2 py-1 mr-3 border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out absolute right-0 cursor-pointer">
            See All
          </button>
        </div>
        {ProductsHome.slice(0, itemsToShow).map((Product, index) => (
          <div
            key={index}
            className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2 "
          >
            <div className="product-content bg-white border-2 border-solid border-lightGrayColor rounded-md p-3">
              <div className="img-product-home relative flex justify-center">
                <Image
                  src={Product.src}
                  className="m-5 mt-7"
                  width={200}
                  height={200}
                  alt="product-home"
                />
                <div className="absolute top-0 w-full flex items-center">
                  <button
                    className={`text-white text-sm font-normal rounded-md px-3 py-1  cursor-pointer ${
                      Product.outStock ? "bg-[#F13A3A]" : "bg-secondary"
                    }`}
                  >
                    {Product.outStock ? "Out of Stock" : "15% off"}
                  </button>
                  <span
                    className={`font-medium text-sm text-blackText absolute right-0 ${
                      Product.outStock ? "hidden" : "block"
                    }`}
                    onClick={() => handleActiveIconHeart(index)}
                  >
                    <Image
                      src={ activeHearts[index] ? heartRed : heartWhite}
                      className="cursor-pointer"
                      width={20}
                      height={20}
                      alt="product-home"
                    />
                  </span>
                </div>
              </div>
              <div className="caption-product-home text-center ">
                <h3 className="lg:text-sm text-xs text-blackSubText font-normal">
                  {Product.title}
                </h3>
                {/* Div With Price */}
                <div className="my-2">
                  <span className="lg:text-2xl text-sm text-secondary font-bold">
                    {Product.newPrice}
                  </span>
                  <span className="lg:text-xl text-xs text-graySubText font-normal lg:mx-3 ml-1 line-through">
                    {Product.olPrice}
                  </span>
                </div>
                {/* Div With Button Add To Cart  */}
                <div className="add-cart flex items-center justify-center relative my-4">
                  <div className="w-full flex justify-center lg:h-12 h-9">
                    {/* Button With Notify Me */}
                    {Product.outStock && (
                      <button
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="text-primary lg:text-base text-sm font-normal justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
                      >
                        <RiShoppingBasket2Line
                          className={`transition-all duration-500 ease-in-out lg:text-2xl text-xl mr-1 ${
                            hoveredIndex === index
                              ? "text-white"
                              : "text-primary"
                          }`}
                        />
                        Notify Me
                      </button>
                    )}
                    {/* Button With Add to Increment */}
                    {!activeHearts[index] && !Product.outStock && (
                      <button
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="text-primary lg:text-base text-sm font-normal justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
                      >
                        <RiShoppingBasket2Line
                          className={`transition-all duration-500 ease-in-out lg:text-2xl text-xl mr-1 ${
                            hoveredIndex === index
                              ? "text-white"
                              : "text-primary"
                          }`}
                        />
                        Add to Cart
                      </button>
                    )}
                    {/* Button With Decrement & Cart */}
                    {activeHearts[index] && !Product.outStock && (
                      <button
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="text-primary text-base font-normal justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
                      >
                        <span
                          className="h-full flex justify-center items-center mx-1 cursor-pointer"
                          onClick={() => handleDecrement(index)}
                        >
                          <MdOutlineMinimize
                            className={`transition-all duration-500 ease-in-out text-2xl mb-3 ${
                              hoveredIndex === index
                                ? "text-white"
                                : "text-primary"
                            }`}
                          />
                        </span>
                        <span className="h-full flex grow justify-center items-center cursor-pointer">
                          <span className="text-xl font-bold">
                            {counts[index]}
                          </span>
                        </span>
                        <span
                          className="h-full flex justify-center items-center mr-1 cursor-pointer"
                          onClick={() => handleIncrement(index)}
                        >
                          <GoPlus
                            className={`transition-all duration-500 ease-in-out text-2xl ${
                              hoveredIndex === index
                                ? "text-white"
                                : "text-primary"
                            }`}
                          />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
