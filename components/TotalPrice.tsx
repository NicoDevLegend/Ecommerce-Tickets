"use client";

import { CartContext } from "@/context/CartContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CardPayment from "./CardPayment";

export default function TotalPrice() {
  const { cartProducts, checkAvailableSeats } = useContext(CartContext);
  const [prices, setPrices] = useState([0]);
  const [totalPrice, setTotalPrice] = useState<any>([0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (cartProducts) {
        const prices = await Promise.all<any>(
          cartProducts.products.map(async (productId) => {
            const products = await axios.get(
              `/api/products/${productId.product}`
            );
            const product = await products?.data.products;
            let quantity = productId.selectedSeats;
            let price = 0;
            if (product?.offer) {
              price =
                Number(
                  (
                    product.price -
                    (product.offer / 100) * product.price
                  ).toFixed(2)
                ) * quantity;
            } else {
              price = Number(product?.price.toFixed(2)) * quantity;
            }
            return price;
          })
        );
        setPrices(prices);
        setTotalPrice(
          prices
            .reduce((acc: number, price: number) => acc + price, 0)
            .toFixed(2)
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

  async function openModal() {
    const check = await checkAvailableSeats()?.then((res) => res);
    if (check) {
      setIsOpen(true);
    } else {
      alert("Seats are not available");
    }
  }

  return (
    cartProducts && (
      <div className="mt-6 h-full border-r-2 border-b-2 border-black bg-white p-6 shadow-md md:mt-12 md:w-1/3">
        <div className="flex justify-between">
          <p className="text-xl font-bold">Total</p>
          <div className="">
            <p className="mb-1 me-11 text-xl font-bold">${totalPrice}</p>
          </div>
        </div>
        <button
          className="mt-6 w-full shadow shadow-black rounded-md bg-pink-800 border-2 border-black py-1.5 font-bold text-pink-200 hover:bg-pink-600"
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
