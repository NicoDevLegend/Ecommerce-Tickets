"use client";

import { CartContext } from "@/context/CartContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CardPayment from "./CardPayment";

export default function TotalPrice() {
  const { cartProducts } = useContext(CartContext);
  const [prices, setPrices] = useState([0]);
  const [totalPrice, setTotalPrice] = useState<any>([0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (cartProducts) {
        const prices = await Promise.all<any>(
          cartProducts.products.map(async (productId) => {
            const products = await axios.get(`/api/products/${productId}`);
            const product = await products?.data.products;
            let price = 0;
            if (product?.offer) {
              price = Number(
                (product.price - (product.offer / 100) * product.price).toFixed(
                  2,
                ),
              );
            } else {
              price = Number(product?.price.toFixed(2));
            }
            return price;
          }),
        );
        setPrices(prices);
        setTotalPrice(
          prices
            .reduce((acc: number, price: number) => acc + price, 0)
            .toFixed(2),
        );
      } else {
        setTotalPrice([0]);
      }
    }
    fetchData();
  }, [cartProducts]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    cartProducts && (
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="flex justify-between">
          <p className="text-xl font-bold">Total</p>
          <div className="">
            <p className="mb-1 me-11 text-xl font-bold">${totalPrice}</p>
          </div>
        </div>
        <button
          className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          onClick={openModal}
        >
          Check out
        </button>
        <CardPayment
          isOpen={isOpen}
          closeModal={closeModal}
          amount={totalPrice}
          prices={prices}
        />
      </div>
    )
  );
}
