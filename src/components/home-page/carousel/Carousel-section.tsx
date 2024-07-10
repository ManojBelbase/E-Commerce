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
type Props = {};

const CarouselSection = ({}: Props) => {
  return (
    <div className="container flex justify-center items-center py-8 ">
      <Carousel
        className="w-10/12 h-1/2 mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {(CarouselData as CarouselType[]).map((carousel, i) => {
            return (
              <CarouselItem key={i}>
                <div>
                  <Card className="w-full mx-auto rounded-full">
                    <CardContent className="flex items-center justify-center p-0 h-[50vh] ">
                      <Image
                        src={carousel.imageURL}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-full w-full object-cover rounded-2xl"
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
