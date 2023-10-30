import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Product } from "./ProductLists";
import Price from "./Price";
import { CartContext } from "@/context/CartContext";

export default function CartItem({
  productId,
  quantity,
  index,
}: {
  productId: string;
  quantity: number;
  index: number;
}) {
  const [product, setProduct] = useState<Product>();
  const { removeProduct, addProduct, reduceProduct } = useContext(CartContext);

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
              <span
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => {
                  if (quantity > 1) {
                    reduceProduct(index);
                  }
                }}
              >
                {" "}
                -{" "}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="text"
                value={quantity}
                disabled
              />
              <span
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={() => addProduct(product._id.toString())}
              >
                {" "}
                +{" "}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-lg">
                <Price product={product} total quantity={quantity}/>
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
