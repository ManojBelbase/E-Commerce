import React from "react";
import ProductList from "./product-list";

type Props = {};

const ProductWrapper = ({}: Props) => {
  return (
    <div className="container">
      <h2 className="text-2xl font-medium py-4">Out latest Products</h2>
      <ProductList />
    </div>
  );
};

export default ProductWrapper;
