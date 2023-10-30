"use client";
import History from "@/components/History";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";

export default function PurchaseHistory() {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section>
      <History />
    </section>
  );
}
