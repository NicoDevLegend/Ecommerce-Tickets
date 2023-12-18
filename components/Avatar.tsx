import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  RectangleStackIcon,
  StarIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const menuItems = [
  { href: "/profile", name: "Your Profile" },
  { href: "/purchasehistory", name: "Purchase History" },
  { href: "/offers", name: "Offers" },
  { href: "/favorites", name: "Favorites" },
];

export default function Avatar({ classNames }: { classNames: any }) {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex shadow shadow-black rounded-full bg-pink-800 border-2 border-black text-sm text-pink-200 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2 focus:ring-offset-lime-600">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          {session && session.user ? (
            <Image
              className="border-2 border-slate-400 h-8 w-8 rounded-full"
              src={session.user.image as string}
              alt="user image"
              width={100}
              height={100}
            />
          ) : (
            <UserCircleIcon className="h-8 w-8 rounded-full" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 border-r-4 border-b-4 border-black mt-2 w-48 origin-top-right bg-white py-1 shadow-lg ring-1 ring-lime-600 ring-opacity-5 focus:outline-none">
          {session && session.user && (
            <span className="flex flex-col px-4 text-lg text-black mb-2">
              <small>Signed in as:</small>
              <strong>{session.user.name ?? session.user.email}</strong>
            </span>
          )}
          {menuItems.map((item, index) => {
            return (
              <Menu.Item key={index}>
                {() => (
                  <Link
                    href={item.href}
                    className={classNames(
                      "flex block px-4 py-2 text-sm text-black"
                    )}
                  >
                    <span className="w-4 h-4 self-center mr-2">
                      {item.href === "/profile" && <UserIcon />}
                      {item.href === "/purchasehistory" && (
                        <RectangleStackIcon />
                      )}
                      {item.href === "/offers" && <CurrencyDollarIcon />}
                      {item.href === "/favorites" && <StarIcon />}
                    </span>
                    <span className="mr-2">{item.name}</span>
                  </Link>
                )}
              </Menu.Item>
            );
          })}
          <hr className="border-t-1 border-black mx-4 my-2"></hr>
          <Menu.Item>
            <SignInButton />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
