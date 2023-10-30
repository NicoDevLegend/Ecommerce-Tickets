import axios from "axios";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useEffect, useState } from "react";

type CartContext = {
  cartProducts: Cart | null;
  addProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
  reduceProduct: (index: number) => void;
  clearCart: () => void;
};

type Cart = {
  _id: string;
  userId: string;
  products: string[];
};

export const CartContext = createContext<CartContext>({
  cartProducts: null,
  addProduct: (productId: string) => null,
  removeProduct: (productId: string) => null,
  reduceProduct: (index: number) => null,
  clearCart: () => null,
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartProducts, setCartProducts] = useState<Cart | null>(null);
  const { data: session }: any = useSession();
  const id = session?.user.id;

  useEffect(() => {
    if (session && session.user) {
      axios
        .get(`/api/cart?userId=${session?.user.id}`)
        .then((res) => setCartProducts(res.data.cart));
    }
  }, [session]);

  function addProduct(productId: string) {
    if (!cartProducts) {
      axios
        .post(`/api/cart?userId=${id}`, [productId])
        .then((res) => setCartProducts(res.data.cart));
    } else {
      axios
        .put(`/api/cart/update?userId=${id}`, {
          userId: id,
          products: cartProducts.products.concat(productId),
        })
        .then((res) => setCartProducts(res.data.cart));
    }
  }

  function removeProduct(productId: string) {
    const products = cartProducts?.products.filter(
      (product) => product !== productId,
    );

    if (cartProducts && cartProducts.products.length > 1) {
      axios
        .put(`/api/cart/update?userId=${id}`, {
          userId: id,
          products: products,
        })
        .then((res) => setCartProducts(res.data.cart));
    } else {
      clearCart();
    }
  }

  function reduceProduct(index: number) {
    const products = cartProducts?.products
      .slice(0, index)
      .concat(cartProducts?.products.slice(index + 1));
    axios
      .put(`/api/cart/update?userId=${id}`, {
        userId: id,
        products: products,
      })
      .then((res) => setCartProducts(res.data.cart));
  }

  function clearCart() {
    axios.delete(`/api/cart?userId=${id}`).then(() => setCartProducts(null));
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        removeProduct,
        reduceProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
