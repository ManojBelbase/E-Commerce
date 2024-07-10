import { TCategory } from "./category";
import { TReview } from "./review";

export type Tproduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: TCategory;
  imageUrl: string;
  discount: number;
  stockQuantity: number;
  images: string[];
  reviews: TReview[];
};
