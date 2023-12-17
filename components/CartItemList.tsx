"use client";
import { CartContext, CartProduct } from "@/context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function CartItemList() {
  const { cartProducts } = useContext(CartContext);

  const products: CartProduct[] | undefined = cartProducts?.products;

  return (
    <div className="rounded-lg md:w-2/3">
      {cartProducts ? (
        products?.map((product) => {
          return (
            <CartItem
              key={product.product}
              productId={product.product}
              quantity={product.selectedSeats}
              desc={product.desc}
            />
          );
        })
      ) : (
        <ShoppingCartIcon className="max-w-xs mx-auto text-green-400" />
      )}
    </div>
  );
}
