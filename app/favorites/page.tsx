"use client";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";

export default function Favorites() {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section>
      <p>Favorites</p>
    </section>
  );
}
