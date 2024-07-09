import React from "react";
import CarouselList from "./carousel-list";

type Props = {};

const CarouselWrapper = ({}: Props) => {
  return (
    <div className="py-5 container">
      <CarouselList />
    </div>
  );
};

export default CarouselWrapper;
