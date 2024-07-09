import React from "react";
import ProductData from "@/data/products.json";
import { Tproduct } from "@/types/product";
import SingleProduct from "./single-product";
type Props = {};

const ProductList = ({}: Props) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {(ProductData as unknown as Tproduct[]).map((product, index) => {
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
