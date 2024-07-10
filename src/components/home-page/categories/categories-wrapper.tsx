import React from "react";
import CategoriesList from "./categories-list";

type Props = {};

const CategoriesWrapper = ({}: Props) => {
  return (
    <div className="container py-10">
      <h2 className="text-2xl font-bold ">Categories</h2>
      <CategoriesList />
    </div>
  );
};

export default CategoriesWrapper;
