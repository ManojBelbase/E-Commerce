"use client";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const templets = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default templets;
