import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function ShoppingCart() {
  const { cartProducts } = useContext(CartContext);

  return (
    <Link href="/shoppingcart">
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View shopping cart</span>
        {cartProducts && (
          <>
            <div className="absolute top-1 right-1 -mr-1 -mt-1 w-3 h-3 rounded-full bg-indigo-500 animate-ping"></div>
            <div className="absolute top-1 right-1 -mr-1 -mt-1 w-3 h-3 rounded-full bg-indigo-500"></div>
          </>
        )}
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </Link>
  );
}
