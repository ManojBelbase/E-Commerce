"use client";
import React, { useCallback } from "react";
import categoriesData from "@/data/categories.json";
import { TCategory } from "@/types/category";
import SingleCategoryItem from "./single-card-items";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
type Props = {};

const CategoriesList = ({}: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const newPath = `category/${pathname}`;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <section className="grid gap-5 mt-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
      {(categoriesData as TCategory[]).map((category, ind) => {
        return (
          <Link
            href={newPath + "?" + createQueryString("category", category.name)}
            key={ind}
          >
            <SingleCategoryItem category={category} />
          </Link>
        );
      })}
    </section>
  );
};

export default CategoriesList;
