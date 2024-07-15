"use client";

import ProductCategory from "@/components/home-page/categories/product-category";
import ProductList from "@/components/home-page/products/product-list";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const CategoryPage = (props: Props) => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";
  return (
    <section>
      <ProductList varient="category-product" />
    </section>
  );
};

export default CategoryPage;
