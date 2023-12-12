"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Avatar from "./Avatar";
import ShoppingCart from "./ShoppingCart";
import { useParams, usePathname } from "next/navigation";
import Logo from "./Logo";

const navigation = [
  { name: "SPORTS", href: "/sports", current: false },
  { name: "CONCERTS", href: "/concerts", current: false },
  { name: "THEATRE", href: "/theatre", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const params = useParams();
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-lime-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center shadow shadow-black rounded-md border-2 border-black p-2 text-lime-500 bg-fuchsia-500 hover:bg-lime-600 hover:text-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <Link href="/">
                  <Logo />
                </Link>
                <div className="hidden sm:mx-auto sm:block">
                  <div className="flex justify-center ms-6 space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === `/${params.section}` ||
                            item.href === pathname
                            ? "bg-black text-white border-lime-600"
                            : "bg-white text-black border-black hover:bg-black hover:text-white",
                          "border-b-4 border-r-4 px-3 py-2 text-sm font-bold"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                {/*ShoppingCart*/}
                <ShoppingCart />

                {/* Profile dropdown */}
                <Avatar classNames={classNames} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    item.href === `/${params.section}` || item.href === pathname
                      ? "bg-black text-white border-r-lime-600 border-b-lime-600"
                      : "bg-white text-black border-r-black border-b-black hover:bg-black hover:text-white",
                    "border-b-4 border-r-4 block px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
