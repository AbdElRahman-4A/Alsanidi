"use client";

import categories from "@/code/categories_db";
import { iCategory, iProduct } from "@/code/dataModels";
import products from "@/code/products_db";
import Pagination from "@/components/pagination";
import ProductCardCol from "@/components/productCardCol";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import Image from "next/image";

export default function Category({ params }: { params: { id: string } }) {
  // Find the category based on the ID in the URL params
  const cat = categories.find((category) => category.id == parseInt(params.id));

  // Find the current parent category
  const currentParent = categories.find((category) => category.id == cat?.id || category.id == cat?.parentId);

  // Find all subcategories of the current parent category
  const catSubs = categories.filter((category) => category.parentId == currentParent?.id);

  // Determine the current category
  const currentCat = categories.find((category) => category.id == cat?.id && category.parentId) || 
                    (catSubs.length ? catSubs[0] : currentParent);

  // State for storing main categories (those without parent)
  const [cats, setCats] = useState<iCategory[]>([]);

  // State for managing pagination
  const [page, setPage] = useState(1);

  // State for storing products to be displayed on the current page
  const [productList, setProductList] = useState<iProduct[]>([]);

  // Filter products based on the current category
  const allProducts = products.filter((product) => product.categoryId == currentCat?.id);

  // Fetch main categories on component mount
  useEffect(() => {
    setCats(categories.filter((category) => !category.parentId));
  }, []);

  // Update the product list whenever the page changes
  useEffect(() => {
    setProductList(allProducts.slice((page - 1) * 8, page * 8));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <main dir="ltr" className="bg-mainBg">
      <div className="container mx-auto px-3 md:px-6 py-12">
        <h2 className="text-2xl text-blackText font-bold mb-3">All Categories</h2>
        
        {/* Display main categories */}
        <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {cats.map((category, index) => (
            <Link href={`/categories/${category.id}`} key={index} 
                  className={`type-category text-center lg:p-4 p-2 cursor-pointer bg-white rounded-md shadow-md border-2 
                  ${(currentParent?.id == category.id) && "border-primary"}`}>
              <Image loader={() => category.imgUrl} src={category.imgUrl} alt="category" width={55} height={55} className="mx-auto" />
              <p className="text-primary text-base font-normal mt-3">{category.name}</p>
            </Link>
          ))}
        </div>
        
        {/* Display subcategories */}
        <div className="mt-6">
          {catSubs.map((category, index) => (
            <Link href={`/categories/${category.id}`} key={index} 
                  className={`text-primary text-base font-normal rounded-md px-3 py-1 mx-1 border-2 border-primary transition-all duration-500 ease-in-out inline-block mb-3 
                  ${currentCat && currentCat.id == category.id && "border-1 bg-primary text-white"}`}>
              {category.name}
            </Link>
          ))}
        </div>

        {/* Display products or a message if no products are found */}
        {currentCat ? (
          <div className="pt-6">
            <h2 className="text-2xl text-blackText font-bold mb-3">{currentCat.name}</h2>
            {allProducts.length ? (
              <>
                <div className="grid lg:grid-cols-1 lg:grid-cols-4 gap-4">
                  {productList.map((product) => (
                    <ProductCardCol product={product} key={product.id} />
                  ))}
                </div>
                {allProducts.length > 8 && (
                  <Pagination className="mt-6 justify-center" page={page} numberOfPages={Math.ceil(allProducts.length / 8)} setPage={setPage} />
                )}
              </>
            ) : (
              <p className="text-captionColor text-sm text-center italic">
                <BsInfoCircle className="inline" /> <span className="mx-1">No products found!</span>
              </p>
            )}
          </div>
        ) : (
          <p className="text-captionColor text-sm text-center italic">
            <BsInfoCircle className="inline" /> <span className="mx-1">Category not found!</span>
          </p>
        )}
      </div>
    </main>
  );
}