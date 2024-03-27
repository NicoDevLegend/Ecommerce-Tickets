import { useSession } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Profile() {
  const { data: session }: any = useSession();

  return (
    <form>
      <div className="space-y-12 p-6 max-w-xl mx-auto">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="bg-white text-black font-bold w-max p-3 text-3xl sl:text-center mx-auto">
            PROFILE
          </h2>
          <p className="text-sm font-bold bg-black text-white max-w-max p-3 border-b-4 border-r-4 border-green-400 sl:text-center m-6">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="shadow-sm bg-green-400 rounded rounded-md border border-pink-600 p-6">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full mt-10 mx-auto">
                <label
                  htmlFor="photo"
                  className="block text-sm font-bold leading-6 text-pink-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {session ? (
                    <Image
                      className="h-52 w-52 text-green-600 rounded-full shadow shadow-black"
                      src={session.user.image}
                      alt="photo"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <UserCircleIcon
                      className="h-52 w-52 text-green-600"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                >
                  Username
                </label>
                <div className="mt-2 mb-6">
                  <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-green-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder={session?.user?.name}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 mb-6 text-sm font-bold leading-6 text-pink-900">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="mt-5 border-b border-gray-900/10 pb-12">
              <h2 className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center">
                Personal Information
              </h2>

              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder={session?.user?.name}
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      disabled
                      placeholder={session?.user?.email}
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-bold leading-6 bg-white text-black max-w-max p-1 sl:text-center"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-green-600 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-12 flex items-center justify-center gap-x-6">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 shadow shadow-black border-2 border-pink-800 text-sm font-bold text-pink-200 hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-pink-800 px-3 py-2 shadow shadow-black border-2 border-black text-sm font-bold text-pink-200 hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
