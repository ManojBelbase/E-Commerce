import React from "react";
import categoriesData from "@/data/categories.json";
import { TCategory } from "@/types/category";
import SingleCategoryItem from "./single-card-items";
type Props = {};

const CategoriesList = ({}: Props) => {
  return (
    <section className="grid grid-cols-6 gap-5 mt-5">
      {(categoriesData as unknown as TCategory[]).map((category, ind) => {
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
