import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { TCategory } from "@/types/category";
type Props = {
  category: TCategory;
};

const SingleCategoryItem = ({ category }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={category.imageURL}
          alt={category.name}
          width={100}
          height={100}
          className="w-full max-h-[100px] rounded-md object-cover"
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-center">{category.name}</h3>
      </CardContent>
    </Card>
  );
};

export default SingleCategoryItem;
