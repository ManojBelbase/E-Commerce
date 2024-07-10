import React from "react";
import ProductData from "@/data/products.json";
import { Tproduct } from "@/types/product";
import SingleProduct from "./single-product";
type Props = {};

const ProductList = ({}: Props) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
      {(ProductData as Tproduct[]).map((product, index) => {
        return (
          <div key={index}>
            <SingleProduct product={product} />
          </div>
        );
      })}
    </section>
  );
};

export default ProductList;
