import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" flex items-center justify-between gap-10 py-4 px-4 border-b bg-[#F85606] text-white">
      {/* Logo section */}
      <section className="text-2xl font-bold">Logo</section>
      {/* nav items section */}
      <ul className="flex items-center gap-10 text-lg font-medium">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Products</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
      </ul>
      <section className="flex gap-20 text-black">
        <section>
          <Input
            placeholder="search in daraz"
            className="outline-none border-0"
          />
        </section>
        <section className="flex items-center gap-5 text-black">
          <Button variant="outline">Login</Button>
          <Button variant="outline" size={"icon"}>
            <CiShoppingCart size={24} />
          </Button>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
