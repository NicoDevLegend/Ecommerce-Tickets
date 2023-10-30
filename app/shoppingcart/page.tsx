"use client";
import Cart from "@/components/Cart";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";

export default function ShoppingCart() {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section>
      <Cart />
    </section>
  );
}
