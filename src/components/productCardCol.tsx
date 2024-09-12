"use client";
import { iProduct } from "@/code/dataModels";
import {useContext, useEffect, useState } from "react";
import { RiHeartFill, RiHeartLine, RiShoppingBasket2Line } from "react-icons/ri";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import GlobalContext from "@/code/globalContext";
import Link from "next/link";
import NotifySign from "./notifyModel/notify_sign";
import Image from "next/image";
import NotifySuccess from "./notifyModel/notify_success";
const ProductCardCol = ({
  product,
}: {
  product: iProduct;
}) => {
  const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);
  const defaultImg = product.imagesUrl[0] ? product.imagesUrl[0].url : "";
  const [productCount, setProductCount] = useState(1);
  const [productIsFav, setProductFav] = useState(false);
  const [productInCart, setProductInCart] = useState(false);
  const [openNotify, setOpenNotify] = useState(false);
  const [openNotifySuccess, setOpenNotifySuccess] = useState(false);
  const handleIncrement = () => {
    if (productCount < product.stock) {
      setProductCount(productCount + 1);
    }
  };

  const handleDecrement = () => {
    const count = productCount - 1;
    if (productCount > 0) {
      setProductCount(count);
      if (count == 0) {
        setProductInCart(false);
      }
    }
  };

  const toggleActiveIconHeart = () => {
    setProductFav(!productIsFav);
  };

  useEffect(() => {
    if (productInCart && !G_productsInCart.some(x => x.id == product.id)) {
      setProductCount(productCount || 1);
      setG_ProductsInCart([...G_productsInCart, { ...product, quantity: productCount }]);
    } else if (productInCart && G_productsInCart.some(x => x.id == product.id)) {
      const index = G_productsInCart.findIndex(x => x.id == product.id);
      const products = [...G_productsInCart];
      products[index].quantity = productCount;
      setG_ProductsInCart(products);
    } else if (!productInCart && !productCount && G_productsInCart.some(x => x.id == product.id)) {
      setG_ProductsInCart(G_productsInCart.filter(x => x.id != product.id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productInCart, productCount])

  return (
  <div className="product-content bg-white border-2 border-solid border-lightGrayColor rounded-md p-3 bg-white">
    <div className="img-product-home relative flex justify-center">
      <Image
        loader={() => defaultImg}
        src={defaultImg}
        className="m-5 mt-7"
        width={200}
        height={200}
        alt="product-home"
      />
      <div className="absolute top-0 w-full flex items-center">
        <button
          className={`text-white text-sm font-normal rounded-md px-3 py-1  cursor-pointer ${
            product.stock == 0 ? "bg-redColor" : "bg-secondary"
          }`}
        >
          {product.stock == 0 ? "Out of Stock" : "15% off"}
        </button>
        <span
          className={`font-medium text-sm text-blackText absolute right-0 cursor-pointer ${
            product.stock == 0 ? "hidden" : "block"
          }`}
          onClick={() => toggleActiveIconHeart()}
        >
          {productIsFav ? (
            <RiHeartFill className="text-xl text-redColor"/>
          ) : (
            <RiHeartLine className="text-xl text-grey"/>
          )}
        </span>
      </div>
    </div>
    <div className="caption-product-home text-center ">
      <h3 className="lg:text-sm text-xs text-blackSubText font-normal">
        <Link href={`/product/${product.id}`} className="hover:text-primary underline block"> {product.name} </Link>
      </h3>
      {/* Div With Price */}
      <div className="my-2">
        <span className="lg:text-2xl text-sm text-secondary font-bold">
          {product.discountPrice || product.price} {product.currency}
        </span>
        {
          product.discountPrice ? (
            <span className="lg:text-xl text-xs text-graySubText font-normal lg:mx-3 ml-1 line-through">
              {product.price} {product.currency}
            </span>
          ) : null
        }
      </div>
      {/* Div With Button Add To Cart  */}
      <div className="add-cart flex items-center justify-center relative my-4">
        <div className="w-full flex justify-center lg:h-12 h-9">
          {/* Button With Notify Me */}
          {product.stock == 0 && (
            <button
              onClick={() => setOpenNotify(true)}
              className="text-primary lg:text-base text-sm font-normal justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
            >
              <RiShoppingBasket2Line
                className={`transition-all duration-500 ease-in-out lg:text-2xl text-xl mx-1`}
              />
              Notify Me
            </button>
          )}
          {/* Button With Add to Increment */}
          {!productInCart && product.stock > 0 && (
            <button
            onClick={() => setProductInCart(true)}
            className="text-primary lg:text-base text-sm font-normal justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
            >
              <RiShoppingBasket2Line
                className={`transition-all duration-500 ease-in-out lg:text-2xl text-xl mx-1`}
              />
              Add to Cart
            </button>
          )}
          {/* Button With Decrement & Cart */}
          {productInCart && product.stock > 0 && (
            <button
              className="text-primary hover:text-white text-base font-normal justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer"
            >
              <span
                className="h-full flex justify-center items-center mx-1 cursor-pointer"
                onClick={() => handleDecrement()}
              >
                <MdOutlineMinimize
                  className={`transition-all duration-500 ease-in-out text-2xl mb-3`}
                />
              </span>
              <span className="h-full flex grow justify-center items-center cursor-pointer">
                <span className="text-xl font-bold">
                  {productCount}
                </span>
              </span>
              <span
                className="h-full flex justify-center items-center mx-1 cursor-pointer"
                onClick={() => handleIncrement()}
              >
                <GoPlus
                  className={`transition-all duration-500 ease-in-out text-2xl`}
                />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
    {
      openNotify && <NotifySign setOpenNotify={setOpenNotify} setOpenNotifySuccess={setOpenNotifySuccess}/>
    }
    {
      openNotifySuccess && <NotifySuccess setOpenNotifySuccess={setOpenNotifySuccess} product={product}/>
    }
  </div>
  );
};

export default ProductCardCol;
