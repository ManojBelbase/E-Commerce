import { Tproduct } from "@/types/product";
import Image from "next/image";
import React from "react";

type Props = {
  product: Tproduct;
};

const ProductHero = ({ product }: Props) => {
  const primaryImage = product.images[0];
  return (
    <main>
      <section>
        <figure>
          <Image
            src={primaryImage}
            alt={product.name}
            width={100}
            height={100}
            className="max-wfull max-h-500 object-cover"
          />
          <figcaption className="sr-only">{product.name}</figcaption>
        </figure>
      </section>
      <section className="flex gap-2 mt-2">
        {product.images.map((imageURL, i) => {
          return (
            <figure key={i}>
              <Image
                src={imageURL}
                alt={product.name}
                height={100}
                width={100}
                className="rounded-md mx-[100px] max-h[100px] object-cover"
              />
              <figcaption className="sr-only">{product.name}</figcaption>
            </figure>
          );
        })}
      </section>
    </main>
  );
};

export default ProductHero;
