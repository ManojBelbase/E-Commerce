"use client";

import React, { useCallback } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  stockQunatity: number;
};
export const SELECTED_QUANTITY = "quantity";
const QuantityInput = ({ stockQunatity }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const quantity = Number(searchParams.get(SELECTED_QUANTITY) ?? 1);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleQuantityUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(stockQunatity, Number(e.target.value)));
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANTITY, value.toString())
    );
  };

  const handleMinusClick = () => {
    const newValue = Math.max(1, quantity - 1);
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANTITY, newValue.toString())
    );
  };

  const handlePlusClick = () => {
    const newValue = Math.min(stockQunatity, quantity + 1);
    router.push(
      pathname + "?" + createQueryString(SELECTED_QUANTITY, newValue.toString())
    );
  };

  return (
    <div>
      <section className="flex items-center gap-10">
        <h2 className="text-gray-500">Quantity</h2>
        <div className="flex gap-5 items-center">
          <Button variant={"outline"} onClick={handlePlusClick}>
            <FaPlus />
          </Button>
          <input
            type="number"
            min={1}
            max={10}
            step={1}
            defaultValue={1}
            className="focus:outline-none px-1 py-2 w-[4ch] text-center"
            // display second valuse only if first value is null or false
            value={searchParams.get(SELECTED_QUANTITY) ?? 1}
            onChange={handleQuantityUpdate}
          />
          <Button variant={"outline"} onClick={handleMinusClick}>
            <FaMinus />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default QuantityInput;
