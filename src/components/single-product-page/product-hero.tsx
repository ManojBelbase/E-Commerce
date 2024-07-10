import { Tproduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

type Props = {
  product: Tproduct;
};

const SingleProductHero = ({ product }: Props) => {
  const primaryImage = product.images[0];
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <main className="grid lg:grid-cols-2 gap-10 mt-20 border-2 container p-2 mx-auto w-10/12 md:grid-cols-1 sm:grid-cols-1">
      {/* product image section */}
      <section className="">
        <figure className=" h-96">
          <Image
            src={primaryImage}
            height={500}
            width={500}
            alt={product.name}
            className="max-w-full h-full object-cover rounded-md text-black"
          />
          <figcaption className="sr-only">{product.name}</figcaption>
        </figure>
        <section className="flex gap-2 mt-2 ">
          {product.images.map((imageURL, i) => {
            return (
              <figure key={i}>
                <Card className="h-28">
                  <Image
                    src={imageURL}
                    alt={product.name}
                    height={100}
                    width={100}
                    className="rounded-md m-w[10px] h-full object-cover"
                  />
                </Card>
              </figure>
            );
          })}
        </section>
      </section>
      {/* product details section */}
      <section>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        {/* Ratings */}
        <div className="text-sm">
          <p className="text-[#146BAA]">Ratings {product.reviews[0].rating}</p>
        </div>
        <div className="brands mb-4">
          <p className="text-muted-foreground text-sm">
            Brands: <span className="text-[#146BAA]">No Brand</span>
          </p>
        </div>
        {/* horizontal line */}
        <hr />
        {/* product price section */}
        <section className="my-6">
          <p className="text-2xl text-orange-500 font-semibold">
            Rs. {discountPrice}
          </p>
          <div className="flex gap-2">
            <p className="line-through text-muted-foreground">
              Rs.{product.price}
            </p>
            <span>{product.discount}%</span>
          </div>
        </section>
        {/* quantity section */}
        <section className="flex items-center gap-10">
          <h2 className="text-gray-500">Quantity</h2>
          <div className="flex gap-5">
            <p className="p-[4px] rounded-sm bg-gray-100">&minus;</p>
            <p>{product.stockQuantity}</p>
            <p>&#43;</p>
          </div>
        </section>
        {/* wishlist button */}
        <div className="mt-4">
          <Button variant="outline" className="bg-gray-200 w-full">
            Add To Wishlist
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SingleProductHero;
