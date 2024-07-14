import React from "react";
import CategoriesList from "./categories-list";

type Props = {};

const CategoriesWrapper = ({}: Props) => {
  return (
    <div className="container py-5">
      <h2 className="text-2xl font-medium relative after:content-empty after:block after:w-14 after:h-[3px] after:bg-[#F85606] after:absolute after:left-0 after:bottom--1">
        Categories
      </h2>
      <CategoriesList />
    </div>
  );
};

export default CategoriesWrapper;
