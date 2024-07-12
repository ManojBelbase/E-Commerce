import { Tproduct } from "./product";

export type TCartItem = {
  id: string;
  quantity: number;
  product: Tproduct;
  totalPrice: number;
  createdAt: string;
};
