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
            className="bg-green-400 rounded rounded-md border border-pink-600 shadow shadow-md space-y-0.5 p-6"
          >
            <p className="max-w-max bg-white p-3 font-bold text-black mb-5">
              {purchase.date}
            </p>
            <div className="flex flex-col w-full justify-center md:flex-row">
              <Image
                src={p.imageSrc}
                alt={p.imageAlt}
                width={500}
                height={500}
                className="w-24 h-20 border border-pink-600 mx-auto md:mb-0"
              />
              <Link
                href={`/${p.category}/${p._id}`}
                className="min-w-min w-full bg-white p-3 mt-3 hover:underline md:mt-0"
              >
                <h3 className="font-bold text-black">
                  {p.name}{" "}
                  <span className="text-pink-600">- X{quantity} -</span>
                </h3>
              </Link>
            </div>
            <div className="flex flex-col justify-center mt-2">
              <SeatsDescription desc={purchase.products[index].desc} />
            </div>
            <p className="w-max mx-auto p-3 text-lg font-bold shadow shadow-black text-pink-200 bg-pink-800">
              ${prices[index]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
