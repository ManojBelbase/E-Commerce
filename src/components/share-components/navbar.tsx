"use client";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { signOut } from "next-auth/react";
type Props = {};

// Navbar component
const Navbar = (props: Props) => {
  return (
    // Main nav container with flex layout and styling
    <nav className="flex items-center justify-between gap-4 py-4 px-4 border-b bg-[#F85606] text-white">
      {/* Logo section */}
      <section className="text-2xl font-bold">Logo</section>
      {/* Navigation items section, hidden on small screens (md:hidden) */}
      <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      {/* Search and actions section with responsive layout */}
      <section className="flex items-center gap-4 md:gap-20 text-black w-full md:w-auto">
        {/* Search input, full width on small screens (w-full) */}
        <section className="w-full md:w-auto">
          <Input
            placeholder="Search in Daraz"
            className="outline-none border-0 w-full md:w-auto"
          />
        </section>
        {/* Action buttons section */}
        <section className="flex items-center gap-2 md:gap-5 text-black">
          <Button variant="outline" asChild>
            <Link href={"/auth/signup"}>SignUp</Link>
          </Button>
          <Button variant="outline" onClick={() => signOut()}>
            logout
          </Button>
          {/* Shopping cart button */}
          <Button variant="outline" size={"icon"} asChild>
            <Link href={"/customer/cart"}>
              <CiShoppingCart size={24} />
            </Link>
          </Button>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
