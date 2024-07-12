import React from "react";
import ProductData from "@/data/products.json";
import { notFound } from "next/navigation";
import { Tproduct } from "@/types/product";
import SingleProductHero from "@/components/single-product-page/product-hero";
import ProductDescription from "@/components/single-product-page/product-description";
import ProductReviews from "@/components/single-product-page/product-reviews";
import SimilarProducts from "@/components/single-product-page/similar-products";
type Props = {
  params: {
    id: string;
  };
  //   For multiple dynamic pages
  //   searchParams: {
  //     query: string;
  //     page: string;
  //   };
};

const SingleProductPage = ({ params: { id } }: Props) => {
  const product = (ProductData as Tproduct[]).find(
    (singleProduct) => singleProduct.id === id
  );
  if (product === undefined) notFound();
  return (
    <div>
      <section className="container">
        <SingleProductHero product={product} />
        <ProductDescription product={product} />
        <ProductReviews product={product} />
        <SimilarProducts />
      </section>
    </div>
  );
};

export default SingleProductPage;
