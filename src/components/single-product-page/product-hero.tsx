"use client";
import { Tproduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import QuantityInput from "@/components/single-product-page/quantity-input";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaMinus, FaPlus, FaStar, FaStarHalfAlt } from "react-icons/fa";
type Props = {
  product: Tproduct;
};

const SingleProductHero = ({ product }: Props) => {
  const [count, setCount] = useState(0);
  const stars: React.JSX.Element[] = [];
  const renderStar = (rating: number) => {
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const primaryImage = product.images[0];
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <main className="bg-white grid lg:grid-cols-2 gap-10 mt-20  container p-2 mx-auto w-10/12 md:grid-cols-1 sm:grid-cols-1">
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
        {/* add button section input */}
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
        <div className="flex text-sm gap-2 items-center">
          <p className="text-[#146BAA] flex">
            {/* <RatingStars rating={product.avgRating} /> */}
            <span>{product.avgRating}</span>
          </p>
          <p>{product.reviews[0].rating}</p>
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
        <QuantityInput />
        {/*  buttons  add to cart and buy now */}
        <section className="mt-4 flex items-center gap-10">
          <Button
            variant="outline"
            className="bg-[#26abd4] text-white w-full rounded-none"
          >
            Buy Now
          </Button>
          <Button
            variant="outline"
            className="bg-orange-600 text-white w-full rounded-none"
          >
            Add to Cart
          </Button>
        </section>
      </section>
    </main>
  );
};

export default SingleProductHero;
