import { CartContext } from "@/context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";

export default function ClearCart() {
  const { clearCart, cartProducts } = useContext(CartContext);
  return (
    cartProducts &&
    cartProducts?.products.length > 0 && (
      <TrashIcon
        className="text-slate-700 h-8 w-8 rounded-full ms-11 mb-3"
        onClick={() => clearCart()}
      />
    )
  );
}
