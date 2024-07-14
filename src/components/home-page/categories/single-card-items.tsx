import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { TCategory } from "@/types/category";
import Link from "next/link";
type Props = {
  category: TCategory;
};

// SingleCategoryItem component
const SingleCategoryItem = ({ category }: Props) => {
  return (
    // Main card container with consistent height (h-full) for uniform size
    <Card
      className="hover:shadow-xl cursor-pointer h-full"
      title={category.name}
    >
      {/* Card header with padding */}
      <CardHeader className="p-1">
        {/* Image with fixed height and width, maintaining aspect ratio */}
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={100}
          height={100}
          className="w-full rounded-md object-cover h-36"
        />
      </CardHeader>
      {/* Card content with flexbox for consistent spacing */}
      <CardContent className="flex flex-col justify-between p-2">
        <h3 className="text-center text-xl">{category.name}</h3>
      </CardContent>
    </Card>
  );
};

export default SingleCategoryItem;
