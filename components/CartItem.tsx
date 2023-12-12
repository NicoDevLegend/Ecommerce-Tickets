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
      <div className="flex flex-col justify-between mb-6 bg-lime-600 p-6 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 shadow shadow-black cursor-pointer duration-150 bg-fuchsia-600 text-lime-500 hover:text-fuchsia-500 hover:bg-lime-500 my-3 self-end"
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
          width={500}
          height={500}
          className="w-full border-2 border-lime-300"
        />
        <div className="flex flex-col w-full justify-between">
          <div className="mt-5">
            <h2 className="min-w-min bg-white p-3 border-b-4 border-r-4 border-black text-2xl font-bold text-gray-900">
              {product.name} {product.date}
            </h2>
            <p className="w-max p-3 text-lg font-bold shadow shadow-black rounded-md text-black bg-fuchsia-800">
              <Price product={product} />
            </p>
            <div className="border-gray-100 my-4">
              <div className="text-xl">
                <SeatsDescription desc={desc} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end me-12">
            <p className="max-w-max p-3 text-2xl text-center font-bold shadow-md shadow-lime-950 border-b-4 border-r-4 border-lime-500 text-white bg-black">
              BUY ALL FOR: <Price product={product} total quantity={quantity} />
            </p>
          </div>
        </div>
      </div>
    )
  );
}
