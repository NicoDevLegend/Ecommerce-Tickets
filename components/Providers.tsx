"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { CartContextProvider } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <CartContextProvider>
        <Elements stripe={stripePromise}>{children}</Elements>
      </CartContextProvider>
    </SessionProvider>
  );
};

export default Providers;
