import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { TCategory } from "@/types/category";
type Props = {
  category: TCategory;
};

const SingleCategoryItem = ({ category }: Props) => {
  return (
    <Card className=" ">
      <CardHeader className="p-2 ">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={100}
          height={100}
          className="w-full  rounded-md object-cover  max-h-28 h-full"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-center  text-xl">{category.name}</h3>
      </CardContent>
    </Card>
  );
};

export default SingleCategoryItem;
