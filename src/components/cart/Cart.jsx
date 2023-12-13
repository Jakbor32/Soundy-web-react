import { useState, useEffect, useRef } from "react";
import { useCartContext } from "./CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import CartContent from "./CartContent";

const Cart = ({ openCart, setOpenCart }) => {
  const cartRef = useRef(null);
  const [currentStepCart, setCurrentStepCart] = useState(0);
  const { cartItems } = useCartContext();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponAccepted, setCouponAccepted] = useState(false);
  const [giftWrapApplied, setGiftWrapApplied] = useState(false);
  const [isCouponValid, setIsCouponValid] = useState(true);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
    name: "",
    surname: "",
    email: "",
    country: "",
    remarks: "",

  });

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
      <CartContent
        openCart={openCart}
        cartRef={cartRef}
        closeCart={closeCart}
        isAuthenticated={isAuthenticated}
        currentStepCart={currentStepCart}
        handleGiftWrapClick={handleGiftWrapClick}
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        couponAccepted={couponAccepted}
        isCouponValid={isCouponValid}
        cartItems={cartItems}
        giftWrapApplied={giftWrapApplied}
        calculateTotalAmount={calculateTotalAmount}
        setCurrentStepCart={setCurrentStepCart}
        address={address}
        setAddress={setAddress}
      />
  );
};

export default Cart;
