import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { Product } from "./ProductLists";
import Price from "./Price";
import Link from "next/link";
import AddToFavorites from "./AddToFavorites";
import Stadium from "./Stadium";
import Theatre from "./Theatre";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductQuickviews({
  product,
  onClose,
}: {
  product: Product | undefined;
  onClose: () => void;
}) {
  return (
    product && (
      <Transition.Root show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-black bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full min-w-min items-center overflow-auto bg-green-400 px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute shadow shadow-black right-4 top-4 bg-pink-600 text-green-400 hover:text-pink-500 hover:bg-green-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-h-3 aspect-w-2 overflow-hidden border border-2 border-green-600 rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <Image
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          width={500}
                          height={500}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <AddToFavorites productId={product._id.toString()} />
                        <Link
                          href={`/${product.category}/${product._id}`}
                          className="hover:underline mb-7 ml-2"
                        >
                          <h2 className="min-w-min bg-white p-3 text-2xl font-bold text-gray-900">
                            {product.name} {product.date}
                          </h2>
                        </Link>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>
                          <p className="w-max p-3 text-lg font-medium shadow shadow-black text-pink-200 bg-pink-800">
                            <Price product={product} />
                          </p>

                          {/* Reviews */}
                          <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
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
                              <p className="sr-only">
                                {product.rating} out of 5 stars
                              </p>
                              <a
                                href="#"
                                className="ml-3 p-1 text-sm font-medium text-white bg-black border-b-4 border-r-4 border-green-500 hover:text-green-500"
                              >
                                {product.reviewCount} reviews
                              </a>
                            </div>
                          </div>
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="min-w-min mt-10 p-1"
                        >
                          <h3 id="options-heading" className="sr-only">
                            Product options
                          </h3>
                          <p className="bg-white text-black p-3">
                            <strong>Available: {product.quantity}</strong>
                          </p>
                          {product.quantity > 100 ? (
                            <Stadium product={product} />
                          ) : (
                            <Theatre product={product} />
                          )}
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  );
}
