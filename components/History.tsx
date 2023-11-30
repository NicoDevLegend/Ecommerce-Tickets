import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import PurchaseItem from "./PurchaseItem";
import { CartProduct } from "@/context/CartContext";

export type Purchase = {
  userId: string;
  products: CartProduct[];
  prices: [];
  totalPrice: number;
  date: string;
};

export default function History() {
  const [purchaseArray, setPurchaseArray] = useState<Purchase[]>([]);
  const { data: session }: any = useSession();

  useEffect(() => {
    axios
      .get(`/api/purchase?userId=${session?.user.id}`)
      .then((res) => setPurchaseArray(res.data.purchase));
  }, [session]);

  return (
    <div>
      <h1 className="text-xl font-bold text-center my-6">Purchase History</h1>
      {purchaseArray.map((p: Purchase, index) => {
        return (
          <div
            key={index}
            className="justify-between space-y-5 mb-6 bg-white p-6 shadow-md sm:flex sm:justify-start"
          >
            <p>{p.date}</p>
            <PurchaseItem purchase={p} prices={p.prices} />
            <p className="text-lg font-bold">TOTAL ${p.totalPrice}</p>
          </div>
        );
      })}
    </div>
  );
}
