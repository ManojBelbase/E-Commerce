import { TReview } from "./review";

export type Tproduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  discount: number;
  stockQuantity: number;
  images: string[];
  reviews: TReview[];
};
