"use client";
import Loading from "@/components/Loading";
import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section>
      <Profile />
    </section>
  );
}
