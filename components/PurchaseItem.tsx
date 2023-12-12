import { useEffect, useState } from "react";
import { Purchase } from "./History";
import axios from "axios";
import { Product } from "./ProductLists";
import Image from "next/image";
import Link from "next/link";
import SeatsDescription from "./SeatsDescription";

export default function PurchaseItem({
  purchase,
  prices,
}: {
  purchase: Purchase;
  prices: [];
}) {
  const [productsArray, setProductsArray] = useState<any>([]);

  useEffect(() => {
    const getProductsById = async (id: string) => {
      try {
        const response = await axios
          .get(`/api/products/${id}`)
          .then((res) => res.data.products);
        return response;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    const getProducts = async () => {
      const promise = purchase.products.map((p) => getProductsById(p.product));
      const products = await Promise.all(promise);
      setProductsArray(products);
    };

    getProducts();
  }, [purchase]);

  return (
    <div>
      {productsArray.map((p: Product, index: number) => {
        const quantity = purchase.products[index].selectedSeats;

        return (
          <div
            key={index}
            className="bg-lime-600 shadow shadow-md space-y-0.5 p-6"
          >
            <p className="max-w-max bg-white p-3 border-b-4 border-r-4 border-black font-bold text-black">
              {purchase.date}
            </p>
            <Image
              src={p.imageSrc}
              alt={p.imageAlt}
              width={500}
              height={500}
              className="w-full min-w-mim border-2 border-lime-300"
            />
            <Link href={`/${p.category}/${p._id}`} className="hover:underline">
              <h3 className="min-w-min bg-white p-3 mt-3 border-b-4 border-r-4 border-black font-bold text-black">
                {p.name} <span>X{quantity}</span>
              </h3>
            </Link>
            <SeatsDescription desc={purchase.products[index].desc} />
            <p className="w-max p-3 text-lg font-bold shadow shadow-black rounded-md text-black bg-fuchsia-800">
              ${prices[index]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
