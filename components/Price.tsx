import { useEffect, useState } from "react";
import { Product } from "./ProductLists";

export default function Price({
  product,
  total = false,
  quantity,
}: {
  product: Product | undefined;
  total?: boolean;
  quantity?: number;
}) {
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (product?.offer) {
      const priceCalc =
        Number(
          (product.price - (product.offer / 100) * product.price).toFixed(2)
        ) * (quantity || 1);
      return setPrice(priceCalc);
    } else {
      const priceCalc = Number(product?.price.toFixed(2)) * (quantity || 1);
      return setPrice(priceCalc);
    }
  }, [product, quantity]);

  if (total) {
    return <div>{`$${price.toFixed(2)}`}</div>;
  }

  return (
    <>
      <span className="font-bold text-2xl">{`$${price.toFixed(2)} `}</span>
      <strong className="text-green-400">
        {product?.offer ? `-${product.offer}%` : ""}
      </strong>
      {"  "}
      <strong className="line-through font-bold">
        {product?.offer ? `$${product.price.toFixed(2)}` : ""}
      </strong>
    </>
  );
}
