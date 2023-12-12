import Image from "next/image";
import Link from "next/link";

export default function OffersSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="bg-black border-r-8 border-b-8 border-lime-600 max-w-max text-4xl font-bold tracking-tight text-fuchsia-500 p-6 sm:text-6xl">
              Offers -%
            </h1>
            <p className="mt-10 text-xl text-fuchsia-300">
              <strong>Save up to 75% on selected special local events.</strong>
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="flex items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-fuchsia-800 text-fuchsia-200 text-center text-4xl font-bold italic">
                        OFFER 10%
                      </div>
                      <div className="flex items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-fuchsia-800 text-fuchsia-200 text-center text-4xl font-bold italic">
                        OFFER 15%
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="flex items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-fuchsia-800 text-fuchsia-200 text-center text-4xl font-bold italic">
                        OFFER 50%
                      </div>
                      <div className="flex items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-fuchsia-800 text-fuchsia-200 text-center text-4xl font-bold italic">
                        OFFER 25%
                      </div>
                      <div className="flex items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-fuchsia-800 text-fuchsia-200 text-center text-4xl font-bold italic">
                        OFFER 75%
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="flex items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-fuchsia-800 text-fuchsia-200 text-center text-4xl font-bold italic">
                        OFFER 60%
                      </div>
                      <div className="flex items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 bg-fuchsia-800 text-fuchsia-200 text-center text-4xl font-bold italic">
                        OFFER 30%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/offers"
                className="inline-block font-bold shadow shadow-black rounded-md border-2 border-black bg-fuchsia-500 px-8 py-3 text-center text-lime-300 hover:bg-fuchsia-800"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
