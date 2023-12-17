"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Logo from "./Logo";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await axios
        .post("/api/register", {
          name,
          email,
          password,
        })
        .then((res) => res);

      if (res.status === 201) {
        const form = e.target;
        form.reset();
        alert(res.data.message);
        router.push("/login");
      } else {
        setError(res.data.error);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="bg-green-400 shadow-sm mb-20 mx-auto p-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Logo />
          <h2 className="bg-black text-white w-max mt-6 py-3 px-6 border-b-4 border-r-4 border-green-600 text-3xl sl:text-center mx-auto">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 border-b-4 border-r-4 border-black sl:text-center"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 border-b-4 border-r-4 border-black sl:text-center"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 border-b-4 border-r-4 border-black sl:text-center"
                >
                  Password
                </label>
                <div className="text-sm">
                  {/*<a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                   Forgot password?
                  </a>*/}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md shadow shadow-black border-2 border-black bg-pink-800 px-3 py-1.5 text-lg font-bold leading-6 text-pink-200 shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 block text-sm font-bold leading-6 bg-white text-black max-w-max mx-auto p-2 border-b-4 border-r-4 border-black sl:text-center">
            {"Already have an account?"}{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-green-800 hover:text-green-600 italic underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
