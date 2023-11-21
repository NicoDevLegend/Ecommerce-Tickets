import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Product } from "./ProductLists";
import Price from "./Price";
import { CartContext } from "@/context/CartContext";
import SeatsDescription from "./SeatsDescription";

export default function CartItem({
  productId,
  quantity,
  desc,
}: {
  productId: string;
  quantity: number;
  desc: [] | {};
}) {
  const [product, setProduct] = useState<Product>();
  const { removeProduct } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`/api/products/${productId}`)
      .then((res) => setProduct(res.data.products));
  }, [productId]);

  return (
    product && (
      <div className="justify-between mb-6 bg-white p-6 shadow-md sm:flex sm:justify-start">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={100}
          height={100}
          className="w-full sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-xl font-bold text-gray-900">
              {product.name} {product.date}
            </h2>
            <p className="mt-1 text-lg text-gray-700">
              <Price product={product} />
            </p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <div className="text-xl">
                X{quantity}
                <SeatsDescription desc={desc} />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-xl font-bold">
                <Price product={product} total quantity={quantity} />
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                onClick={() => removeProduct(product._id.toString())}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
