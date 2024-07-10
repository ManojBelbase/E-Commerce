import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tproduct } from "@/types/product";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Image from "next/image";
import React from "react";

type Props = {
  product: Tproduct;
};

const SingleProduct = ({ product }: Props) => {
  const discountPrice = getDiscountedPrice(product.price, product.discount);
  return (
    <Card
      className="rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
      title={product.name}
    >
      <CardHeader className="p-0">
        <figure className="border">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={100}
            height={200}
            className="w-full object-cover max-h-40"
          />
        </figure>

        <CardTitle className="px-2 text-lg font-medium line-clamp-2 leading-6">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <p className="text-xl font-semibold text-orange-600">
          Rs. {discountPrice}
        </p>
        <div className="flex gap-2">
          <p className="line-through text-muted-foreground">{product.price}</p>
          <span>Rs.{product.discount}%</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleProduct;