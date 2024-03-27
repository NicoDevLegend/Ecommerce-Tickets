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
      <div className="flex flex-col justify-between rounded rounded-md mb-6 bg-green-400 p-5 shadow-md border border-pink-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 shadow shadow-black cursor-pointer duration-150 bg-pink-600 text-green-500 hover:text-pink-500 hover:bg-green-500 mb-5 self-end"
          onClick={() => removeProduct(product._id.toString())}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="w-full lg:flex lg:justify-center md:content-center lg:space-x-6 xl:px-0">
          <div className="flex flex-col w-full justify-center md:flex-row">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={500}
              height={500}
              className="w-24 h-20 mb-2 border border-pink-600 mx-auto md:mb-0"
            />
            <h2 className="min-w-min w-full bg-white p-3 text-lg font-bold text-gray-900">
              {product.name} {product.date}
            </h2>
          </div>
          <p className="min-w-max max-w-max mt-3 mx-auto p-3 text-lg font-bold rounded-sm text-pink-200 text-center bg-pink-800 md:mb-auto">
            <Price product={product} />
          </p>
        </div>
        <div className="flex flex-col justify-center mt-2">
          <SeatsDescription desc={desc} />
        </div>
      </div>
    )
  );
}
