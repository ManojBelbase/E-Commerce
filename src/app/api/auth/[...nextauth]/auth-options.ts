import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter your email",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = [
          {
            id: "1",
            email: "thisisme2077@gmail.com",
            password: "12345678",
          },
        ];
        const foundUser = user.find(
          (user) => user.email === credentials?.email
        );
        if (!foundUser) return null;

        const isPwMatch = foundUser.password === credentials?.password;

        if (!isPwMatch) return null;

        return foundUser;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "auth/logout",
    error: "/auth/error",
  },
};
