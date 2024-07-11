import React from "react";
import ProductData from "@/data/products.json";
import { notFound } from "next/navigation";
import { Tproduct } from "@/types/product";
import SingleProductHero from "@/components/single-product-page/product-hero";
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
      <section className="bg-[#f5f5f5]">
        <SingleProductHero product={product} />
      </section>
    </div>
  );
};

export default SingleProductPage;
