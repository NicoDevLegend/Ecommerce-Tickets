"use client";
import ClearCart from "./ClearCart";
import CartItemList from "./CartItemList";
import TotalPrice from "./TotalPrice";

export default function CheckOut() {
  return (
    <div className="min-h-screen pb-20">
      <h1 className="bg-black text-white w-max p-3 border-b-4 border-r-4 border-lime-500 text-3xl sl:text-center m-6">
        Cart Items
      </h1>
      <ClearCart />
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <CartItemList />
        <TotalPrice />
      </div>
    </div>
  );
}
