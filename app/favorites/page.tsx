"use client";
import Favorites from "@/components/Favorites";
import Loading from "@/components/Loading";
import { useSession } from "next-auth/react";

export default function FavoritesPage() {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section>
      <Favorites />
    </section>
  );
}
