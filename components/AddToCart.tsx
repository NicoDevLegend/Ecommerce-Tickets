import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddToCart({
  productId,
  selectedSeats,
  desc,
  seats,
  disabled,
}: {
  productId: string;
  selectedSeats: number;
  desc: {};
  seats: number[] | boolean[][];
  disabled: boolean;
}) {
  const { addProduct } = useContext(CartContext);
  const { data: session }: any = useSession();
  const router = useRouter();

  const addProductAndRedirect = () => {
    if (session) {
      addProduct(productId, selectedSeats, desc, seats);
      router.push("/shoppingcart");
    } else {
      alert("Sign in to add products");
    }
  };

  return (
    <button
      type="submit"
      className="mt-6 flex w-full items-center justify-center rounded-md ont-bold shadow shadow-black border-2 border-black bg-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={addProductAndRedirect}
      disabled={disabled}
    >
      Add to Cart
    </button>
  );
}
