import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tproduct } from "@/types/product";
import Image from "next/image";
import React from "react";

type Props = {
  product: Tproduct;
};

const SingleProduct = ({ product }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={100}
          height={200}
        />
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{product.price}</p>
        <p>{product.price}</p>
        <span>{product.discount}</span>
      </CardContent>
    </Card>
  );
};

export default SingleProduct;
