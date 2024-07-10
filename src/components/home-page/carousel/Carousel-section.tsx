import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselType } from "@/types/carousel";
import CarouselData from "@/data/carousel.json";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
type Props = {
  carousel: CarouselType;
};

const CarouselSection = ({ carousel }: Props) => {
  return (
    <div className="container flex justify-center items-center py-8">
      <Carousel className="w-[80%] mx-auto ">
        <CarouselContent>
          {(CarouselData as CarouselType[]).map((carousel, i) => {
            return (
              <CarouselItem key={i}>
                <div className="p-1">
                  <Card className="w-[70%] mx-auto">
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <Image
                        src={carousel.imageURL}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-full w-full object-cover"
                        alt="slider image"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
