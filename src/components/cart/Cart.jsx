import { useState, useEffect, useRef } from "react";
import { icons } from "../../lib/Constants";
import CartItem from "./CartItem";
import StepIndicator from "./StepIndicator";
import { useCartContext } from "./CartContext";

const Cart = ({ openCart, setOpenCart }) => {
  const cartRef = useRef(null);
  const [currentStepCart, setCurrentStepCart] = useState(0);
  const { cartItems } = useCartContext();

  // Close the cart with animate
  const closeCart = () => {
    cartRef.current.classList.add("animate-slide-out-left");
    setTimeout(() => {
      setOpenCart(false);
    }, 250);
  };

  // Close the cart when width > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpenCart(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpenCart]);
  return (
    <>
      <div
        ref={cartRef}
        className={`fixed right-0 top-0 z-40 h-screen w-full md:w-[40rem] overflow-y-auto bg-slate-950 pt-5 shadow-lg transition-transform duration-500 ${
          openCart ? "animate-slide-in-left" : "animate-slide-out-left"
        }`}
      >
        <div
          openCart={openCart}
          className="fixed top-0 right-0 z-40 w-full md:w-[40rem] h-full pt-3 shadow-lg"
        >
          <div
            onClick={closeCart}
            className="flex items-center float-right px-3 py-1 m-3 font-light rounded-full cursor-pointer w-max bg-slate-700 hover:bg-slate-800"
          >
            <button>Close cart</button>
            {icons[4].doubleRightArrow}
          </div>

          <div className="flex flex-col items-center justify-center w-full px-5 mt-20 sm:px-10">
            <StepIndicator currentStepCart={currentStepCart} />

            <div className="flex flex-col w-full h-full gap-5 mt-5">
              {cartItems.length === 0 ? (
                <p className="py-5 text-xl text-center">Your cart is empty</p>
              ) : (
                cartItems.map((item, index) => <CartItem key={index} />)
              )}
            </div>
          </div>
          <div className="px-5 sm:px-10">
            <div className="mt-10">
              {cartItems.length === 0 ? null : (
                <>
                  <p className="pb-3">Coupons</p>
                  <div className="flex justify-between p-3 border rounded-lg">
                    <div>Enter your coupon code</div>
                    <input type="text" className="w-20 px-2 text-black" />
                  </div>
                </>
              )}
            </div>
            <div className="mt-10">
              {cartItems.length === 0 ? null : (
                <>
                  <p className="pb-3">Gifting</p>
                  <div className="flex flex-col justify-between p-3 border rounded-lg bg-slate-500">
                    <div>Buying for a loved one</div>
                    <div>Send personalized message at $20</div>
                    <a className="text-green-600" href="">
                      Add gift wrap
                    </a>
                  </div>
                </>
              )}
            </div>
            <div className="mt-10">
              {cartItems.length === 0 ? null : (
                <>
                  <p className="pb-3">Price Details</p>
                  <div className="flex flex-col justify-between p-3 border rounded-lg bg-slate-500">
                    <div>1 item</div>
                    <div className="flex justify-between">
                      <div>Name of item</div>
                      <div>$45.20</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Coupon discount</div>
                      <div>$2.50</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Delivery Charges</div>
                      <div>Free Delivery</div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="flex justify-between">
                      <div>Total Amount</div>
                      <div>$43.20</div>
                    </div>
                  </div>
                  <button className="w-full px-5 py-3 mt-10 mb-24 bg-gray-700 border-2 rounded-lg">
                    Place order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={closeCart}
        className="fixed top-0 right-0 w-screen h-screen bg-black opacity-80"
      ></div>
    </>
  );
};

export default Cart;
