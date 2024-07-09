import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselType } from "@/types/carousel";
import Image from "next/image";
import React from "react";

type Props = {
  carousel: CarouselType;
};

const SingleCarouselItem = ({ carousel }: Props) => {
  return (
    <div className="container bg-red-500 h-48 rounded-sm">
      <CarouselItem>
        <Image
          src={carousel.imageURL}
          alt="carousel image"
          width={400}
          height={100}
        />
      </CarouselItem>
    </div>
  );
};
export default SingleCarouselItem;
