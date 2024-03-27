"use client";

import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        onClick={() =>
          signOut({
            callbackUrl: process.env.NEXTAUTH_URL,
          })
        }
        className="flex px-4 py-2 mx-4 my-2 text-md text-black"
      >
        Sign Out
        <span className="w-6 h-6 self-center ml-2">
          <ArrowRightOnRectangleIcon />
        </span>
      </button>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="flex px-4 py-2 mx-4 my-2 text-md text-black"
    >
      Sign In
      <span className="w-6 h-6 self-center ml-2">
        <ArrowLeftOnRectangleIcon />
      </span>
    </button>
  );
};

export default SignInButton;
