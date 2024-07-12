import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import cartItemsData from "@/data/cart-items.json";
import { TCartItem } from "@/types/cartItems";
import Image from "next/image";
import { getDiscountedPrice } from "@/utils/getDiscountedPrice";
import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "../ui/button";

type Props = {};

export default function CartItemsTable({}: Props) {
  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Sub Total</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(cartItemsData as TCartItem[]).map((cartItem) => {
            return (
              <TableRow key={cartItem.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex gap-3">
                    <figure className="max-h-80 max-w-80">
                      <Image
                        src={cartItem.product.images[0]}
                        alt={cartItem.product.name}
                        height={80}
                        width={80}
                        className="object-cover"
                      />
                    </figure>
                    <p>{cartItem.product.name}</p>
                  </div>
                </TableCell>
                <TableCell>
                  {getDiscountedPrice(
                    cartItem.product.price,
                    cartItem.product.discount
                  )}
                </TableCell>
                <TableCell>{cartItem.quantity}</TableCell>
                <TableCell>{cartItem.totalPrice}</TableCell>
                <TableCell className="text-right">
                  <section className="flex items-center text-2xl text-muted-foreground gap-x-2.5">
                    <Button variant={"outline"} size={"icon"}>
                      <CiHeart />
                    </Button>
                    <MdDeleteOutline />
                  </section>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
