import React from "react";
import { products } from "../../lib/Constants";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import { useCartContext } from "../cart/CartContext";
import LoginButton from "../auth/Login";

const NewCollection = () => {

   // Toast

   const notifyProductAddedToCart = () => {
    toast("Product added to cart", {
      duration: 3000,
      position: "top-left",
      style: {
        background: "#006400",
        color: "#fff",
        fontSize: "1rem",
      },
    });
  };

  const notifyProductNotAddedToCart = () => {
    toast(newToast, {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#8B0000",
        color: "#fff",
        fontSize: "1rem",
      },
    });
  };

  const newToast = () => (
    <div className="mx-2 py-2">
      <p className="text-center text-xl pb-2">Error</p>
      <p className="text-sm pb-1">Product has not been added to your cart:</p>
      <ul className="text-sm">
        <li>- Please ensure you are logged in</li>
        <li>- There was a processing error</li>
      </ul>
      <div className="flex justify-center pt-4">
        {isAuthenticated ? "" : <LoginButton />}
      </div>
    </div>
  );

  const { isAuthenticated } = useAuth0();

  const newCollection = [...products];
  const lastTwoItems = newCollection.slice(-2);

  const { addToCart } = useCartContext();

  const handleAddToCart = (product) => {
    if (isAuthenticated) {
      addToCart(product);
      notifyProductAddedToCart();
    } else {
      notifyProductNotAddedToCart();
    }
  };

  return (
    <section>
      <div className="container px-0 sm:px-5 mx-auto py-14 md:px-20">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          {lastTwoItems.map((newItem) => (
            <div className="font-epilogue text-white lg:w-screen mt-10 w-full">
              <div className="flex items-center">
                <img
                  className="lg:min-w-max w-[15rem]"
                  src={newItem.src}
                  alt={newItem.alt}
                />

                <div className="flex gap-3 flex-col  w-full lg:w-[30rem] -ml-20 lg:ml-0">
                  <div className="font-gotu lg:text-6xl  text-center text-3xl italic">
                    {newItem.price}{" "}
                    <span className="lg:text-7xl text-4xl">$</span>
                  </div>
                  <div className="lg:text-5xl text-xl mr-5 lg:mr-0 font-oregano text-center">
                    {newItem.name}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 items-center">
                <button
                  className="bg-stone-800 hover:bg-stone-600 font-bold py-2 px-5"
                  onClick={() => handleAddToCart(newItem)}
                >
                  Add to cart
                </button>
                <div className="cursor-pointer flex items-center">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
