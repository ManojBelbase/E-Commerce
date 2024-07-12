import React from "react";
import ProductList from "../home-page/products/product-list";

type Props = {};

const SimilarProducts = (props: Props) => {
  return (
    <div>
      <section className="mt-12">
        <h3 className="font-medium text-2xl">You May also like</h3>
        <ProductList />
      </section>
    </div>
  );
};

export default SimilarProducts;
