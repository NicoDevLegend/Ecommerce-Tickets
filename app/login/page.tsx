"use client";

import Loading from "@/components/Loading";
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";

export default function Login() {
  const { status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }
  
  return (
    <section>
      <LoginForm />
    </section>
  );
}
