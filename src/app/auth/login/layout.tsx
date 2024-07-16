import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Sign In | With My App",
  description: "this is tjhe title of sign in",
};
const SignInLayout = async ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SignInLayout;
