import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          await dbConnect();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if (account.provider === "google") {
        try {
          const { name, email } = user;
          await dbConnect();
          const ifUserExists = await User.findOne({ email });
          if (ifUserExists) {
            return user;
          }
          const newUser = new User({
            name: name,
            email: email,
          });
          const res = await newUser.save();
          if (res.status === 200 || res.status === 201) {
            console.log(res);
            return user;
          }
        } catch (err) {
          console.log(err);
        }
      }
      return user;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image =
          token.picture ??
          `https://ui-avatars.com/api/?name=${token.name[0]}&background=random&size=128`;
        session.user.id = user ? user.id : token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};