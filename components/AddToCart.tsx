import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function AddToCart({ productId }: { productId: string }) {
  const { addProduct } = useContext(CartContext);
  const router = useRouter();

  const addProductAndRedirect = () => {
    addProduct(productId);
    router.push("/shoppingcart");
  };

  return (
    <button
      type="submit"
      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={addProductAndRedirect}
    >
      Add to Cart
    </button>
  );
}
