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
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <Link
                    href={`/${section}`}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {section.toString().toUpperCase()}
                  </Link>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="font-medium text-gray-500 hover:text-gray-600 text-sm">
                {product.name}
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <Image
                src={product.imageSrc || "https://placeholder.pics/svg/"}
                alt={product.imageAlt || "Product image"}
                width={100}
                height={100}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <Image
                  src={product.imageSrc || "https://placeholder.pics/svg/"}
                  alt={product.imageAlt || "Product image"}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <Image
                  src={product.imageSrc || "https://placeholder.pics/svg/"}
                  alt={product.imageAlt || "Product image"}
                  width={100}
                  height={100}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <Image
                src={product.imageSrc || "https://placeholder.pics/svg/"}
                alt={product.imageAlt || "Product image"}
                width={100}
                height={100}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl grid grid-cols-2 font-bold tracking-tight text-gray-900 sm:text-3xl">
                <span>
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
              <p className="text-3xl tracking-tight text-gray-900">
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
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0",
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {product.reviewCount} reviews
                  </a>
                </div>
              </div>
              <br></br>
              <p>Available: {product.quantity}</p>
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
                  <p className="text-base text-gray-900">
                    Description: <strong>{product.searchParam}</strong>
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
