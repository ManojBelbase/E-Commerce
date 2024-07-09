import React from "react";
import CategoriesList from "./categories-list";

type Props = {};

const CategoriesWrapper = (props: Props) => {
  return (
    <div className="container py-20">
      <h2>Categories</h2>
      <CategoriesList />
    </div>
  );
};

export default CategoriesWrapper;
