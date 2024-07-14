import CartItemsTable from "@/components/cart/cart-item-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

export default function CartPage({}: Props) {
  return (
    <main className="container py-10">
      <header className="flex items-start justify-start flex-col gap-1">
        <h2 className="text-4xl font-semibold">Cart</h2>
        <p className="text-muted-foreground">A list of your cart items</p>
      </header>

      <section className="grid grid-cols-3 gap-10 mt-10">
        <section className="col-span-2 border rounded-md">
          <CartItemsTable />
        </section>

        <section>
          <OrderSummary />
        </section>
      </section>
    </main>
  );
}

function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <section className="flex items-center justify-between gap-5">
          <h4>Sub Total</h4>
          <span>Rs. 500</span>
        </section>
        <section className="flex items-center justify-between gap-5">
          <h4>Delivery Fee</h4>
          <span>Rs. 110</span>
        </section>
        <section className="w-full flex gap-2">
          <Input
            type="text"
            placeholder="Enter Voucher"
            className="outline-none focus:outline-none focus:border-none"
          />
          <Button
            variant="default"
            className="bg-[#25A5D8] rounded-sm hover:bg-[#25b4ec]"
          >
            Apply
          </Button>
        </section>
        <Separator />
        <section className="flex items-center justify-between gap-5 ">
          <h4>Total</h4>
          <span className="text-[#F85606]">Rs. 610</span>
        </section>
        <section className="w-full bg-red-300">
          <Button
            variant="default"
            className="bg-[#f85606] rounded-sm w-full hover:bg-[#f85700c0]"
          >
            PROCEED TO CHECKOUT({1})
          </Button>
        </section>
      </CardContent>
    </Card>
  );
}
