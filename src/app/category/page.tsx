import ProductList from "@/components/home-page/products/product-list";
import React from "react";

type Props = {};

const CustomCategory = (props: Props) => {
  return (
    <section>
      <h1>Category page</h1> <ProductList varient={"all-products"} />
    </section>
  );
};

export default CustomCategory;
