import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "./ProductLists";
import Price from "./Price";
import Link from "next/link";

export default function FavoriteItem({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get(`/api/products/${productId}`)
        .then((res) => setProduct(res.data.products));
    };
    getProduct();
  }, [productId]);

  return (
    product && (
      <div className="space-y-0.5 mb-2 p-6 mx-auto max-w-lg">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={500}
          height={500}
          className="w-full border-2 border-green-400"
        />
        <div className="bg-green-600 p-1 shadow-xl">
          <Link
            href={`/${product.category}/${product._id}`}
            className="hover:underline"
          >
            <h3 className="h-28 bg-white p-3 border-b-4 border-r-4 border-black text-xl font-bold pr-12">
              {product.name} {product.date}
            </h3>
          </Link>
          <h3 className="max-w-max mx-3 -mt-2 text-l font-bold text-white bg-black border-b-4 border-r-4 border-green-600 ps-3 py-2 pr-12">
            {product.searchParam}
          </h3>
        </div>
        <p className="w-max text-lg font-medium shadow shadow-black rounded-md text-pink-200 bg-pink-800 mx-auto p-3 border-2 border-black">
          <Price product={product} />
        </p>
      </div>
    )
  );
}
