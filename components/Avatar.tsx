import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
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
        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          {session && session.user ? (
            <Image
              className="border-2 border-slate-400 h-8 w-8 rounded-full"
              src={session.user.image || "https://placeholder.pics/svg"}
              alt="user image"
              width={100}
              height={100}
            />
          ) : (
            <UserCircleIcon className="text-slate-400 h-8 w-8 rounded-full" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {session && session.user && (
            <span className="block px-4 py-2 text-sm text-slate-900">
              <small>Signed in as</small>
              <br />
              <strong>{session.user.name ?? session.user.email}</strong>
            </span>
          )}
          {menuItems.map((item, index) => {
            return (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            );
          })}
          <Menu.Item>{({ active }) => <SignInButton />}</Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
