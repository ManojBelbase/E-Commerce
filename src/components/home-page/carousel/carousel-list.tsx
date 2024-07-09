import React from "react";
import CarouselData from "@/data/carousel.json";
import { CarouselType } from "@/types/carousel";
import SingleCarouselItem from "./single-carousel-items";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
type Props = {};

const CarouselList = ({}: Props) => {
  return (
    <section>
      <Carousel>
        <CarouselContent className="">
          {(CarouselData as CarouselType[]).map((carousel, index) => {
            return (
              <div key={index}>
                <SingleCarouselItem carousel={carousel} />
              </div>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CarouselList;
