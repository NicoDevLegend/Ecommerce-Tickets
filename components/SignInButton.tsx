"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4">
        <button
          onClick={() => signOut()}
          className="block px-4 py-2 text-sm text-gray-700"
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="block px-4 py-2 text-sm text-gray-700"
    >
      Sign In
    </button>
  );
};

export default SignInButton;
