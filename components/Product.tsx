"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Product } from "@/components/ProductLists";
import axios from "axios";
import Link from "next/link";
import Price from "./Price";
import AddToFavorites from "./AddToFavorites";
import Stadium from "./Stadium";
import Theatre from "./Theatre";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [product, setProduct] = useState<Product>();
  const { section, productId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/products/${productId}`)
      .then((res) => setProduct(res.data.products));
  }, [productId]);

  return (
    product && (
      <div>
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="max-w-max bg-black text-white border-r-2 border-b-2 border-green-400 ms-6 flex items-center space-x-2 p-2"
            >
              <li>
                <div className="flex items-center">
                  <Link
                    href={`/${section}`}
                    className="mr-2 text-sm font-medium hover:text-green-400"
                  >
                    {section.toString().toUpperCase()}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="font-medium hover:text-green-400 text-sm cursor-pointer">
                {product.name}
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden border border-green-400 rounded-lg lg:block">
              <Image
                src={product.imageSrc || "https://placeholder.pics/svg/"}
                alt={product.imageAlt || "Product image"}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden border border-green-400 rounded-lg">
                <Image
                  src={product.imageSrc || "https://placeholder.pics/svg/"}
                  alt={product.imageAlt || "Product image"}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden border border-green-400 rounded-lg">
                <Image
                  src={product.imageSrc || "https://placeholder.pics/svg/"}
                  alt={product.imageAlt || "Product image"}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 border border-green-400 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <Image
                src={product.imageSrc || "https://placeholder.pics/svg/"}
                alt={product.imageAlt || "Product image"}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl grid grid-cols-2 font-bold tracking-tight text-gray-900 sm:text-3xl">
                <span className="min-w-min bg-white p-3 border-b-4 border-r-4 border-black text-2xl font-bold text-gray-900">
                  {product.name} {product.date}
                </span>
                <span>
                  <AddToFavorites productId={product._id.toString()} />
                </span>
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="w-max p-3 text-lg font-medium shadow shadow-black rounded-md text-pink-200 bg-pink-800">
                <Price product={product} />
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-pink-600"
                            : "text-green-400",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 p-1 text-sm font-medium text-white bg-black border-b-4 border-r-4 border-green-400 hover:text-green-400"
                  >
                    {product.reviewCount} reviews
                  </a>
                </div>
              </div>
              <br></br>
              <p className="bg-white text-black p-3 border-b-4 border-r-4 border-black">
                Available: {product.quantity}
              </p>
              {product.quantity > 100 ? (
                <Stadium product={product} />
              ) : (
                <Theatre product={product} />
              )}
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="w-full h-full min-h-screen mx-auto text-l font-bold text-white bg-black border-b-4 border-r-4 border-green-600 p-12">
                    -Description-
                    <br></br>
                    <strong>{product.searchParam}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
