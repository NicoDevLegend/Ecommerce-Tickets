import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { useState, Fragment, useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";
import { CartContext } from "@/context/CartContext";
import { useSession } from "next-auth/react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  amount?: number;
  prices: number[];
};

export default function CardPayment({
  isOpen,
  closeModal,
  amount,
  prices,
}: Props) {
  const { clearCart, cartProducts, updateSeatsProduct } =
    useContext(CartContext);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const { data: session } = useSession();

  let productsIds = cartProducts?.products.map((p) => p.product);
  let productsDesc = cartProducts?.products.map((p) => p.desc);

  const handleChange = async (e: StripeCardElementChangeEvent) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const postPurchase = async () => {
    const date = new Date();
    await axios.post("/api/purchase", {
      userId: cartProducts?.userId,
      products: cartProducts?.products,
      prices: prices,
      totalPrice: amount,
      date: date.toLocaleDateString("en-GB"),
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    const cardElement = elements?.getElement(CardElement);

    if (session && session.user) {
      var { data } = await axios.post("/api/create-payment-intent", {
        description: `Name: ${session.user.name || ""}, Email: ${
          session.user.email || ""
        }, Cart: ${JSON.stringify(productsIds)}, Desc: ${JSON.stringify(
          productsDesc
        )}, Amounts: ${JSON.stringify(prices)}`,
        amount: amount,
      });
    }

    if (!stripe || !cardElement) return null;
    const payload = await stripe?.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (payload?.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      postPurchase();
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      updateSeatsProduct();
      clearCart();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-lime-600 p-6 text-left align-middle shadow-xl transition-all">
                <button
                  type="submit"
                  className="absolute right-4 top-4 shadow shadow-black bg-fuchsia-500 text-lime-500 hover:text-fuchsia-500 hover:bg-lime-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Dialog.Title
                  as="h3"
                  className="max-w-max mx-auto text-xl text-center font-medium border-r-4 border-b-4 border-lime-500 bg-black leading-6 text-white mt-3 p-2"
                >
                  Complete the payment
                </Dialog.Title>
                <div className="mt-6">
                  <form
                    className="bg-white border-r-2 border-b-2 border-black py-6 px-3"
                    onSubmit={onSubmit}
                  >
                    {!succeeded && (
                      <>
                        <h1 className="text-xl font-medium text-black my-2">
                          Credit/Debit Card
                        </h1>
                        <CardElement
                          className="border-2 border-slate-400 py-3 px-2"
                          onChange={handleChange}
                        />
                      </>
                    )}
                    {/* Show any error that happens when processing the payment */}
                    {error && (
                      <div className="card-error" role="alert">
                        {error}
                      </div>
                    )}
                    {/* Show a success message upon completion */}
                    <p
                      className={
                        succeeded ? "result-message" : "result-message hidden"
                      }
                    >
                      Payment successful!
                    </p>
                    {!succeeded && (
                      <button
                        className="mt-16 flex w-full items-center justify-center shadow shadow-black rounded-md border-2 border-black bg-fuchsia-600 px-8 py-3 text-base font-bold text-lime-300 hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                        disabled={processing || disabled}
                        type="submit"
                      >
                        <span id="button-text">
                          {processing ? (
                            <>
                              <svg
                                aria-hidden="true"
                                className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                              <span className="inline mr-2">Processing...</span>
                            </>
                          ) : (
                            "Pay now"
                          )}
                        </span>
                      </button>
                    )}
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
