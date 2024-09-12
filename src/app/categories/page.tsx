"use client";

import categories from "@/code/categories_db";
import { iCategory, iProduct } from "@/code/dataModels";
import { useEffect, useState } from "react";
import ProductCardCol from "@/components/productCardCol";
import products from "@/code/products_db";
import { BsInfoCircle } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function AllCategories() {
  // State variables to manage categories, active category, and subcategories
  const [cats, setCats] = useState<iCategory[]>([]);
  const [activeCatId, setActiveCatId] = useState<number>(0);
  const [activeSubs, setActiveSubs] = useState<iCategory[]>([]);

  // Function to get products of a specific category
  const getCatProducts = (catId: number): iProduct[] => {
    return products.filter((product) => product.categoryId === catId);
  };

  // Effect to set top-level categories on component mount
  useEffect(() => {
    setCats(categories.filter((category) => !category.parentId));
    setActiveCatId(categories[0]?.id || 0);
  }, []);

  // Effect to set subcategories when active category changes
  useEffect(() => {
    setActiveSubs(categories.filter((category) => category.parentId === activeCatId));
  }, [activeCatId]);

  return (
    <main dir="ltr" className="bg-mainBg">
      <div className="container mx-auto px-3 md:px-6 py-12">
        <h2 className="text-2xl text-blackText font-bold mb-3">All Categories</h2>

        {/* Display top-level categories */}
        <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {cats.map((category) => (
            <div 
              key={category.id} 
              role="button" 
              onClick={() => setActiveCatId(category.id)} 
              className={`type-category text-center lg:p-4 p-2 cursor-pointer bg-white rounded-md shadow-md border-2 ${activeCatId === category.id && "border-primary"}`}
            >
              <Image loader={() => category.imgUrl} src={category.imgUrl} alt="category" width={55} height={55} className="mx-auto" />
              <p className="text-primary text-base font-normal mt-3">{category.name}</p>
            </div>
          ))}
        </div>

        {/* Display subcategories and products */}
        {activeSubs.length ? (
          activeSubs.map((cat) => (
            <div key={cat.id}>
              <div className="flex flex-wrap md:justify-between justify-center mt-6 mb-3">
                <Link href={`/categories/${cat.id}`} className="text-lg text-blackText font-bold">{cat.name}</Link>
                {getCatProducts(cat.id).length > 4 && (
                  <Link href={`/categories/${cat.id}`} className="border-2 bg-transparent border-primary text-primary rounded-md px-3 mx-1">See all</Link>
                )}
              </div>
              <div className="container px-0">
                {getCatProducts(cat.id).length ? (
                  <div className="grid lg:grid-cols-4 gap-4">
                    {getCatProducts(cat.id).slice(0, 4).map((product) => (
                      <ProductCardCol product={product} key={product.id} />
                    ))}
                  </div>
                ) : (
                  <p className="text-captionColor text-sm text-center italic">
                    <BsInfoCircle className="inline" /> <span className="mx-1"> No products found!</span>
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="container px-0 mt-6">
            {getCatProducts(activeCatId).length ? (
              <>
                {getCatProducts(activeCatId).length > 4 && (
                  <div className="text-end mb-3 mt-6">
                    <Link href={`/categories/${activeCatId}`} className="border-2 bg-transparent border-primary text-primary rounded-md px-3 mx-1 py-1  inline-block mb-3">See all</Link>
                  </div>
                )}
                <div className="grid lg:grid-cols-4 gap-4">
                  {getCatProducts(activeCatId).slice(0, 4).map((product) => (
                    <ProductCardCol product={product} key={product.id} />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-captionColor text-sm text-center italic">
                <BsInfoCircle className="inline" /> <span className="mx-1"> No products found!</span>
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}