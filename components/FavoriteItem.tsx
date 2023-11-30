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
      <div className="space-y-0.5 mb-2 p-6">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={100}
          height={100}
          className="w-full mx-auto"
        />
        <Link
          href={`/${product.category}/${product._id}`}
          className="hover:underline"
        >
          <h3 className="text-xl font-bold">{product.name}</h3>
        </Link>
        <Price product={product} />
      </div>
    )
  );
}
