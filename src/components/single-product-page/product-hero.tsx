"use client";
import { Tproduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import QuantityInput from "@/components/single-product-page/quantity-input";
import RatingStars from "../share-components/rating-stars";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Props = {
  product: Tproduct;
};

const SingleProductHero = ({ product }: Props) => {
  const primaryImage = product.images[0];
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <main className="grid lg:grid-cols-2 gap-10 mt-20 container p-2 mx-auto w-10/12 md:grid-cols-1 sm:grid-cols-1">
      {/* product image section */}
      <section className="">
        <figure className="h-96">
          <Image
            src={primaryImage}
            height={500}
            width={500}
            alt={product.name}
            className="max-w-full h-full object-cover rounded-md text-black"
          />
          <figcaption className="sr-only">{product.name}</figcaption>
        </figure>
        {/* multiple products images */}
        <section className="flex gap-2 mt-2">
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-1">
              {product.images.map((imageUrl, ind) => {
                return (
                  <CarouselItem
                    key={ind}
                    className="pl-1 md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <figure key={ind}>
                        <Image
                          src={imageUrl}
                          alt={product.name}
                          height={100}
                          width={100}
                          className="rounded-md max-w-[90px] min-h-[90px] max-h-[100px] object-cover"
                        />
                        <figcaption className="sr-only">
                          {product.name}
                        </figcaption>
                      </figure>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </section>
      {/* product details section */}
      <section>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        {/* Ratings */}
        <div className="flex text-sm gap-2 items-center">
          <RatingStars rating={product.avgRating} />
          <span>{product.avgRating}</span>
          <span className="text-muted-foreground">
            ({product.reviews.length})
          </span>
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
