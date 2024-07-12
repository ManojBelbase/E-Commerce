import { Tproduct } from "@/types/product";
import React from "react";

type Props = {
  product: Pick<Tproduct, "description">;
};

export default function ProductDescription({ product }: Props) {
  return (
    <section className="mt-20">
      <h3 className="font-medium text-2xl mb-5">
        You can read more about this product here
      </h3>
      <p className="leading-7">{product.description}</p>
    </section>
  );
}
