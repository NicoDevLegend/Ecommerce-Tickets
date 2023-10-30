"use client";
import ClearCart from "./ClearCart";
import CartItemList from "./CartItemList";
import TotalPrice from "./TotalPrice";

export default function CheckOut() {
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <ClearCart />
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <CartItemList />
        <TotalPrice />
      </div>
    </div>
  );
}
