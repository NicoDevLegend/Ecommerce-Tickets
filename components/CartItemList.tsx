"use client";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

export default function CartItemList() {
  const { cartProducts } = useContext(CartContext);

  const products = cartProducts?.products;
  return (
    <div className="rounded-lg md:w-2/3">
      {cartProducts &&
        products?.map((productId: string, index) => {
          if (products.indexOf(productId) === index) {
            const count = products.filter((p) => p === productId).length;
            return (
              <CartItem
                key={productId}
                productId={productId}
                quantity={count}
                index={index}
              />
            );
          }
        })}
    </div>
  );
}
