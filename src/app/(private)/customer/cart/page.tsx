import CartItemsTable from "@/components/cart/cart-item-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Separator />
        <section className="flex items-center justify-between gap-5">
          <h4>Total</h4>
          <span>Rs. 610</span>
        </section>
      </CardContent>
    </Card>
  );
}
