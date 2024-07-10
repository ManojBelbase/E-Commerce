import React from "react";
import categoriesData from "@/data/categories.json";
import { TCategory } from "@/types/category";
import SingleCategoryItem from "./single-card-items";
type Props = {};

const CategoriesList = ({}: Props) => {
  return (
    <section className="grid gap-5 mt-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
      {(categoriesData as TCategory[]).map((category, ind) => {
        return (
          <div key={ind}>
            <SingleCategoryItem category={category} />
          </div>
        );
      })}
    </section>
  );
};

export default CategoriesList;
