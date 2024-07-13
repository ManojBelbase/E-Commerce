import React from "react";

import ProductList from "@/components/home-page/products/product-list";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="container">
      <h2 className="py-4 text-2xl font-medium relative after:content-empty after:block after:w-14 after:h-[3px] after:bg-[#F85606] after:absolute after:left-0 after:bottom--1">
        Just For You
      </h2>
      <ProductList varient={"all-product"} />
    </section>
  );
};

export default Page;
