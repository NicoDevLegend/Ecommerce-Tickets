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
      <div className="flex flex-col justify-between mb-6 bg-white p-6 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 cursor-pointer duration-150 hover:text-red-500 my-3 self-end"
          onClick={() => removeProduct(product._id.toString())}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={100}
          height={100}
          className="w-full"
        />
        <div className="ml-4 flex flex-col w-full justify-between">
          <div className="mt-5">
            <h2 className="text-xl font-bold text-gray-900">
              {product.name} {product.date}
            </h2>
            <p className="mt-1 text-lg text-gray-700">
              <Price product={product} />
            </p>
            <div className="border-gray-100 my-4">
              <div className="text-xl">
                <SeatsDescription desc={desc} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end me-12">
            <p className="text-xl font-bold">
              <Price product={product} total quantity={quantity} />
            </p>
          </div>
        </div>
      </div>
    )
  );
}
