import { useState, useEffect, useRef } from "react";
import { icons } from "../../lib/Constants";
import CartItem from "./CartItem";
import StepIndicator from "./StepIndicator";
import { useCartContext } from "./CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/Login";

const Cart = ({ openCart, setOpenCart }) => {
  const cartRef = useRef(null);
  const [currentStepCart, setCurrentStepCart] = useState(0);
  const { cartItems } = useCartContext();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponAccepted, setCouponAccepted] = useState(false);
  const [giftWrapApplied, setGiftWrapApplied] = useState(false);
  const [isCouponValid, setIsCouponValid] = useState(true);

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    // Check if the entered coupon code is valid
    if (couponCode === "#Borka") {
      setIsCouponValid(true);
      setCouponAccepted(true);
      setCouponApplied(true); // Automatically apply the coupon
    } else {
      setIsCouponValid(false);
      setCouponAccepted(false);
      setCouponApplied(false); // Ensure coupon is not applied if invalid
    }
  }, [couponCode]);

  const handleGiftWrapClick = () => {
    setGiftWrapApplied(!giftWrapApplied);
  };

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

  const calculateTotalAmount = () => {
    let totalAmount = cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    if (giftWrapApplied) {
      totalAmount += 20;
    }

    if (couponApplied) {
      // Apply a 10% discount if the coupon is applied
      totalAmount *= 0.9;
    }

    return totalAmount.toFixed(2);
  };

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
          {!isAuthenticated && (
            <div>
              <p className="flex flex-col items-center justify-center w-full px-5 mt-20 text-center sm:px-10">
                Access to this section is restricted to logged-in users only.
                Please log in or sign in to view the content.
              </p>
              <div className="flex justify-center mt-5">
                <LoginButton />
              </div>
            </div>
          )}
          {isAuthenticated && (
            <div>
              <div className="flex flex-col items-center justify-center w-full px-5 mt-20 sm:px-10">
                <StepIndicator currentStepCart={currentStepCart} />

                <div className="flex flex-col w-full h-full gap-5 mt-5">
                  {cartItems.length === 0 ? (
                    <p className="py-5 text-xl text-center">
                      Your cart is empty
                    </p>
                  ) : (
                    cartItems.map((product, index) => (
                      <CartItem key={index} product={product} />
                    ))
                  )}
                </div>
              </div>
              <div className="px-5 sm:px-10">
                <div className="mt-10">
                  {cartItems.length === 0 ? null : (
                    <>
                      <p className="pb-3">Coupons</p>
                      <div className="flex justify-between p-3 border rounded-lg items-center">
                        <div>Enter your coupon code</div>
                        <div className="flex items-center gap-3">
                          {couponCode && (
                            <p
                              className={` text-sm ${
                                isCouponValid
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {isCouponValid
                                ? "Coupon accepted"
                                : "Invalid coupon"}
                            </p>
                          )}
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              className={`w-20 px-2 text-black ${
                                couponAccepted
                                  ? "border-green-500"
                                  : "border-red-500"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-10">
                  {cartItems.length === 0 ? null : (
                    <>
                      <p className="pb-3">Gifting</p>
                      <div className="flex flex-col justify-between p-3 border rounded-lg bg-slate-700">
                        <div>Buying for a loved one</div>
                        <div>Send personalized message at $20</div>
                        <a
                          onClick={handleGiftWrapClick}
                          className={`${
                            giftWrapApplied ? "text-red-300" : "text-green-300"
                          } cursor-pointer`}
                        >
                          {giftWrapApplied
                            ? "Remove gift wrap"
                            : "Add gift wrap"}
                        </a>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-10">
                  {cartItems.length === 0 ? null : (
                    <div>
                      <p className="pb-3">Price Details</p>
                      <div className="flex flex-col justify-between p-3 border rounded-lg bg-slate-700">
                        <div>
                          {cartItems.length} item
                          {cartItems.length > 1 ? "s" : ""}
                        </div>
                        {cartItems.map((product, index) => (
                          <div key={index} className="flex justify-between">
                            <div className="flex gap-3">
                              <div>{product.name}</div>
                              <div className="text-blue-300">
                                x{product.quantity}
                              </div>
                            </div>
                            <div>
                              ${(product.price * product.quantity).toFixed(2)}
                            </div>
                          </div>
                        ))}
                        {isCouponValid && couponAccepted && (
                          <div className="flex justify-between">
                            <div>Coupon discount -10%</div>
                            <div>
                              -$
                              {(
                                cartItems.reduce(
                                  (total, product) =>
                                    total + product.price * product.quantity,
                                  0
                                ) * 0.1
                              ).toFixed(2)}
                            </div>
                          </div>
                        )}

                        {giftWrapApplied && (
                          <div className="flex justify-between">
                            <div>Gift Wrap</div>
                            <div>$20</div>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <div>Delivery Charges</div>
                          <div>Free Delivery</div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="flex justify-between">
                          <div>Total Amount</div>
                          <div className="text-xl">
                            ${calculateTotalAmount()}
                          </div>
                        </div>
                      </div>
                      <button className="w-full px-5 py-3 mt-10 mb-24 bg-gray-800 border-2 rounded-lg active:scale-95"
                      onClick={() => setCurrentStepCart(1)}>
                        Place order
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
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
