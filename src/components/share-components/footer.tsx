import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-200 mt-20 flex items-center justify-center gap-2 py-3">
      <p>My Ecommerce &copy; 2024</p>
      <section className="space-x-3">
        <Link href={"/"}>Privacy pllicy</Link>
        <Link href={"/"}>Terms & conditions</Link>
      </section>
    </footer>
  );
};

export default Footer;
