import { useEffect, useState } from "react";
import { Purchase } from "./History";
import axios from "axios";
import { Product } from "./ProductLists";
import Image from "next/image";

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
      const promise = purchase.products.map((id) => getProductsById(id));
      const products = await Promise.all(promise);
      setProductsArray(products);
    };

    getProducts();
  }, [purchase]);

  return (
    <div>
      {productsArray.map((p: Product, index: number) => {
        return (
          <div key={index} className="space-y-0.5 mb-2">
            <Image
              src={p.imageSrc}
              alt={p.imageAlt}
              width={100}
              height={100}
              className="w-full sm:w-40"
            />
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p>${prices[index]}</p>
          </div>
        );
      })}
    </div>
  );
}
