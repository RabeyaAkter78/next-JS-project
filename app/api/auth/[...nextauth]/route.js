import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          console.log("Connecting to MongoDB...");
          await connectMongoDB();
          console.log("Connected to MongoDB");

          console.log("Finding user with email:", email);
          const user = await User.findOne({ email });

          if (!user) {
            console.log("No user found with email:", email);
            return null;
          }

          console.log("User found:", user);
          console.log("Comparing passwords...");
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            console.log("Password mismatch for user:", email);
            return null;
          }

          console.log("Password match for user:", email);
          return user;

        } catch (error) {
          console.log("Error in authorization:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
