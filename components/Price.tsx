import { Product } from "./ProductLists";

export default function Price({ product }: { product: Product }) {
  return (
    <>
      {`$${
        product.offer
          ? (product.price - (product.offer / 100) * product.price).toFixed(2)
          : product.price.toFixed(2)
      }`}{" "}
      <span className="text-lime-600">
        {product.offer ? `-${product.offer}%` : ""}
      </span>
      {"  "}
      <span className="line-through">
        {product.offer ? `$${product.price.toFixed(2)}` : ""}
      </span>
    </>
  );
}
