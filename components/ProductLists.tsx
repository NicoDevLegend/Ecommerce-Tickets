"use client";
import Image from "next/image";
import ProductQuickviews from "./ProductQuickviews";
import { useEffect, useState } from "react";
import Price from "./Price";
import axios from "axios";
import Link from "next/link";

export type Product = {
  _id: string;
  name: string;
  quantity: number;
  seats: number[] | boolean[][];
  category: string;
  description: string;
  searchParam: string;
  date: string;
  price: number;
  offer: number;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  imageAlt: string;
};

type ProductLists = {
  section: "sports" | "concerts" | "theatre";
  offers?: boolean | undefined;
};

export const postProductReviews = async (product: Product) => {
  await axios.post(`/api/products/${product._id}`, {
    reviewCount: product.reviewCount + 1,
  });
};

export default function ProductLists({
  section,
  offers = false,
}: ProductLists) {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    axios
      .get(`/api/products?category=${section}`)
      .then((res) => setProducts(res.data.products));
  }, [section]);

  const handleSetOpen = (product: Product) => {
    setOpen(true);
    setProduct(product);
  };

  const handleSetClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-gray-300">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h3 className="text-3xl sl:text-center m-6">
            {section.toLocaleUpperCase()}
          </h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products
              .filter((product: Product) =>
                offers ? product.offer : product._id,
              )
              .map((product: Product) => {
                return (
                  <div key={product._id}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        width={100}
                        height={100}
                        onClick={() => handleSetOpen(product)}
                        className="cursor-pointer h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <Link
                      href={`/${section}/${product._id}`}
                      className="hover:underline"
                      onClick={() => postProductReviews(product)}
                    >
                      <h3 className="text-xl font-bold text-gray-700 sm:pr-12">
                        {product.name} {product.date}
                      </h3>
                    </Link>
                    <h3 className="text-l font-bold text-gray-500 sm:pr-12">
                      {product.searchParam}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      <Price product={product} />
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {products && open && (
        <ProductQuickviews onClose={handleSetClose} product={product} />
      )}
    </>
  );
}
