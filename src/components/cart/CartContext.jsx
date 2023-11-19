import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId, quantity = 1) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === productId
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity -= quantity;

      if (updatedCartItems[existingItemIndex].quantity < 0) {
        updatedCartItems[existingItemIndex].quantity = 0;
      }

      if (updatedCartItems[existingItemIndex].quantity === 0) {
        updatedCartItems.splice(existingItemIndex, 1);
      }

      setCartItems(updatedCartItems);
    }
  };

  const removeProduct = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
