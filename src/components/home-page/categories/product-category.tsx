"use client";
import React, { useEffect } from "react";
import productData from "@/data/products.json";
import ProductList from "../products/product-list";

type Props = {
  category: string;
};

const ProductCategory = ({ category }: Props) => {
  const filteredData = productData.filter(
    (product) => product.category.name.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="grid grid-cols-5 gap-4">
      {filteredData.length > 0 ? (
        filteredData.map((product, ind) => (
          <div key={ind} className="h-full">
            <ProductList varient="all-product" />
          </div>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductCategory;
