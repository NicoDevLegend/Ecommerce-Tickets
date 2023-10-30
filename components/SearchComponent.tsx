"use client";

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Product } from "./ProductLists";
import Link from "next/link";
import { postProductReviews } from "./ProductLists";
import Highlighter from "react-highlight-words";

export default function SearchComponent() {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/api/products/search?search=${value}`)
        .then((res) => setProducts(res.data.products));
      if (value === "") {
        setProducts([]);
      }
    };
    fetchData();
  }, [value]);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clearSearch = (product: Product) => {
    setValue("");
    setProducts([]);
    postProductReviews(product);
  };

  return (
    <div>
      <form className="mx-auto max-w-sm px-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={value}
            placeholder="Search Event/Artist/Team"
            onChange={(event) => searchHandler(event)}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
          {products && value !== "Search Event/Artist/Team" && (
            <div className="absolute w-full max-h-52 overflow-y-auto z-50">
              {products.map((product: Product) => {
                return (
                  <div key={product._id} className="bg-white p-2">
                    <Link
                      href={`/${product.category}/${product._id}`}
                      onClick={() => clearSearch(product)}
                    >
                      <p className="text-xs">{product.category}</p>
                      <Highlighter
                        searchWords={[value]}
                        highlightClassName="font-bold bg-slate-300"
                        className="font-bold"
                        textToHighlight={product.name}
                      />
                      <br />
                      <Highlighter
                        searchWords={[value]}
                        highlightClassName="font-bold bg-slate-300"
                        className="text-sm text-gray-500"
                        textToHighlight={product.searchParam}
                        autoEscape={true}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
