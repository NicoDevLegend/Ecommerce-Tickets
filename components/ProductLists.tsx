"use client";
import Image from "next/image";
import ProductQuickviews from "./ProductQuickviews";
import { useEffect, useState } from "react";
import Price from "./Price";
import axios from "axios";
import Link from "next/link";
import Pulse from "./Pulse";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/products?category=${section}`).then((res) => {
      setProducts(res.data.products);
      setLoading(false);
    });
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
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h3 className="bg-black text-white w-max p-3 border-b-4 border-r-4 border-green-400 text-3xl sl:text-center m-6">
            {section.toLocaleUpperCase()}
          </h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <>
                <Pulse />
                <Pulse />
                <Pulse />
                <Pulse />
              </>
            ) : (
              products
                .filter((product: Product) =>
                  offers ? product.offer : product._id
                )
                .map((product: Product) => {
                  return (
                    <div key={product._id} className="flex flex-col">
                      <div
                        onClick={() => handleSetOpen(product)}
                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden border border-b-0 border-pink-400 xl:aspect-h-8 xl:aspect-w-7 hover:opacity-90 cursor-pointer group"
                      >
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          width={500}
                          height={500}
                          className="h-full w-full object-cover rounded rounded-md rounded-b-none object-center"
                        />
                        <div className="flex justify-center items-center h-full w-full text-pink-200 text-xl font-bold invisible group-hover:visible">
                          <div className="bg-pink-600 p-2 rounded-lg shadow shadow-black">Click to quickview</div>
                        </div>
                      </div>
                      <div className="bg-green-400 pb-3 shadow-md rounded rounded-md rounded-t-none border border-t-0 border-pink-400">
                        <Link
                          href={`/${section}/${product._id}`}
                          className="text-black hover:underline"
                          onClick={() => postProductReviews(product)}
                        >
                          <h3 className="h-28 bg-white p-3 text-xl font-bold pr-12">
                            <strong>
                              {product.name} {product.date}
                            </strong>
                          </h3>
                        </Link>
                        <h3 className="w-max mx-3 mt-0 text-l font-bold text-white bg-black border-b-4 border-r-4 border-green-600 ps-3 py-2 pr-12">
                          {product.searchParam}
                        </h3>
                      </div>
                      <p className="w-max text-lg font-medium shadow shadow-black text-pink-200 bg-pink-800 p-3 self-center">
                        <Price product={product} />
                      </p>
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </div>
      {products && open && (
        <ProductQuickviews onClose={handleSetClose} product={product} />
      )}
    </>
  );
}
