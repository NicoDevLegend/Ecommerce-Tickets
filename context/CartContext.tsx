import axios from "axios";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useEffect, useState } from "react";

type CartContext = {
  cartProducts: Cart | null;
  addProduct: (
    productId: string,
    selectedSeats: number,
    desc: {} | [],
    seats: number[] | boolean[][],
  ) => void;
  removeProduct: (productId: string) => void;
  reduceProduct: (index: number) => void;
  clearCart: () => void;
  checkAvailableSeats: () => Promise<boolean> | null;
  updateSeatsProduct: () => void;
};

export type CartProduct = {
  product: string;
  selectedSeats: number;
  desc: {} | [];
  seats: number[] | boolean[][];
};

type Cart = {
  _id: string;
  userId: string;
  products: CartProduct[];
};

export const CartContext = createContext<CartContext>({
  cartProducts: null,
  addProduct: (
    productId: string,
    selectedSeats: number,
    desc: {} | [],
    seats: number[] | boolean[][],
  ) => null,
  removeProduct: (productId: string) => null,
  reduceProduct: (index: number) => null,
  clearCart: () => null,
  checkAvailableSeats: () => null,
  updateSeatsProduct: () => null,
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

  function addProduct(
    productId: string,
    selectedSeats: number,
    desc: {} | [],
    seats: number[] | boolean[][],
  ) {
    if (!cartProducts) {
      axios
        .post(`/api/cart?userId=${id}`, [
          {
            product: productId,
            selectedSeats: selectedSeats,
            desc: desc,
            seats: seats,
          },
        ])
        .then((res) => setCartProducts(res.data.cart));
    } else {
      axios
        .put(`/api/cart/update?userId=${id}`, {
          userId: id,
          products: cartProducts.products.concat({
            product: productId,
            selectedSeats: selectedSeats,
            desc: desc,
            seats: seats,
          }),
        })
        .then((res) => setCartProducts(res.data.cart));
    }
  }

  function removeProduct(productId: string) {
    const products = cartProducts?.products.filter(
      (product) => product.product !== productId,
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

  async function checkAvailableSeats() {
    const resultsArray = await Promise.all<any>(
      cartProducts?.products.map(async (p) => {
        let product = await axios
          .get(`/api/products/${p.product}`)
          .then((res) => res.data.products);
        if (p.desc instanceof Array) {
          const rows = "ABCDEFGHIJ";
          const resultArray = p.desc.map(
            (seat) =>
              product.seats[rows.indexOf(seat[0])][Number(seat.slice(1)) - 1],
          );
          const result = resultArray.includes(true) ? true : false;
          return result;
        } else if (p.desc instanceof Object) {
          const values = Object.values(p.desc);
          const resultArray = values.map(
            (seat, index) => seat > 0 && product.seats[index] === 0,
          );
          const result = resultArray.includes(true) ? true : false;
          return result;
        }
      }),
    );
    const result = resultsArray.includes(true) ? false : true;
    return result;
  }

  function updateSeatsProduct() {
    cartProducts?.products.map(async (p) => {
      const product = await axios
        .get(`/api/products/${p.product}`)
        .then((res) => res.data.products);
      await axios.post(`/api/products/${p.product}`, {
        seats: p.seats,
        quantity: product.quantity - p.selectedSeats,
      });
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        removeProduct,
        reduceProduct,
        clearCart,
        checkAvailableSeats,
        updateSeatsProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
