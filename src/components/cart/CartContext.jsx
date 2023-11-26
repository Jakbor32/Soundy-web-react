import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useFirebaseEffects from "../../hooks/useFirebaseEffects";
import { deleteDocument } from "../../config/FirebaseUtils";
import useFetchProducts from "../../hooks/useFetchProducts";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user, isAuthenticated } = useAuth0();

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

  const removeDoc = async (productId) => {
    if (isAuthenticated) {
      const userId = getUserId();
      const docRef = `${userId}/${productId}`;

      try {
        await deleteDocument(docRef);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeProduct = (productId) => {
    const itemToRemove = cartItems.find((item) => item.id === productId);

    if (itemToRemove) {
      const uidToRemove = itemToRemove.uid;

      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId
      );
      setCartItems(updatedCartItems);

      removeDoc(uidToRemove);
    }
  };

  const getUserId = () => {
    const userId = JSON.stringify(user.sub);
    return isAuthenticated && userId;
  };

  useFirebaseEffects(cartItems, isAuthenticated, getUserId);

  const fetchProductsFromDatabase = async () => {
    try {
      const userId = getUserId();
      const products = await useFetchProducts(userId);
      setCartItems(products);
    } catch (error) {
      console.error("Error fetching products from the database: ", error);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      fetchProductsFromDatabase();
    }
  }, [isAuthenticated]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
