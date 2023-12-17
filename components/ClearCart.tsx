import { CartContext } from "@/context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";

export default function ClearCart() {
  const { clearCart, cartProducts } = useContext(CartContext);
  return (
    cartProducts &&
    cartProducts?.products.length > 0 && (
      <TrashIcon
        className="text-green-300 h-8 w-8 ms-11 mb-6 cursor-pointer hover:text-fuchsia-600"
        onClick={() => clearCart()}
      />
    )
  );
}
