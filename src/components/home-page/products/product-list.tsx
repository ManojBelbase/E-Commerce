import React from "react";
import ProductData from "@/data/products.json";
import { Tproduct } from "@/types/product";
import SingleProduct from "./single-product";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import Link from "next/link";
type Props = {
  // product:Tproduct;
  varient: string;
};

type productType = {
  product: Tproduct;
};

const ProductList = ({ varient }: Props) => {
  return (
    <section>
      {varient === "similar-product" ? (
        <SimilarProduct />
      ) : varient === "all-product" ? (
        <AllProduct />
      ) : (
        <section className="grid grid-cols-4 gap-6">
          {(ProductData as Tproduct[]).map((product, index) => {
            return (
              <section key={index}>
                <SingleProduct product={product} />
              </section>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default ProductList;

function SimilarProduct() {
  return (
    <section className="space-y-10">
      {(ProductData as Tproduct[]).map((product, index) => {
        return (
          <section key={index}>
            <Card
              className="rounded-lg mb-10 grid grid-cols-2  overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              title={product.name}
            >
              <CardHeader className="p-0">
                <figure>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={100}
                    height={250}
                    className="w-full  max-h-72 object-cover"
                  />
                </figure>
              </CardHeader>
              <CardContent className="p-2">
                <CardTitle className="px-2 text-lg font-medium line-clamp-2 leading-6">
                  {product.name}
                </CardTitle>
                <p className="text-xl font-semibold text-orange-600">
                  {getDiscountedPrice(product.price, product.discount)}
                </p>
                <div className="flex gap-2">
                  <p className="line-through text-muted-foreground">
                    {product.price}
                  </p>
                  <span>Rs.{product.discount}%</span>
                </div>
              </CardContent>
            </Card>
          </section>
        );
      })}
    </section>
  );
}
function AllProduct() {
  return (
    <section className=" grid grid-cols-2 gap-5">
      {(ProductData as Tproduct[]).map((product, index) => {
        return (
          <Link href={`products/${product.id}`}>
            <section key={index}>
              <Card
                className="rounded-lg grid grid-cols-2 hover:shadow-lg transition-all cursor-pointer"
                title={product.name}
              >
                <CardHeader className="p-0">
                  <figure>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={100}
                      height={250}
                      className="w-full h-72 object-cover"
                    />
                  </figure>
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="px-2 text-lg font-medium line-clamp-2 leading-6">
                    {product.name}
                  </CardTitle>
                  <p className="text-xl font-semibold text-orange-600">
                    Rs. {getDiscountedPrice(product.price, product.discount)}
                  </p>
                  <div className="flex gap-2">
                    <p className="line-through text-muted-foreground">
                      {product.price}
                    </p>
                    <span>Rs.{product.discount}%</span>
                  </div>
                </CardContent>
              </Card>
            </section>
          </Link>
        );
      })}
    </section>
  );
}
