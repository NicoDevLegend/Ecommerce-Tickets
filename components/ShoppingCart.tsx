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
        className="relative shadow shadow-black rounded-full bg-fuchsia-500 border-2 border-black p-1 text-black hover:text-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2 focus:ring-offset-lime-600"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View shopping cart</span>
        {cartProducts && (
          <>
            <div className="absolute top-1 right-1 -mr-1 -mt-1 w-3 h-3 rounded-full bg-lime-500 animate-ping"></div>
            <div className="absolute top-1 right-1 -mr-1 -mt-1 w-3 h-3 rounded-full border-2 border-black bg-lime-500"></div>
          </>
        )}
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </Link>
  );
}
