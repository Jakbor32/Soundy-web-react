import React from "react";
import { useCartContext } from "./CartContext";

const CartItem = ({ product }) => {
  const { name, price, src, alt, production_year, quantity } = product;
  const { addToCart, removeFromCart, removeProduct } = useCartContext();

  const handleDecrease = () => {
    if (quantity > 1) {
      removeFromCart(product.id);
    }
  };

  const handleIncrease = () => {
    addToCart(product, 1);
  };

  const handleRemove = () => {
    removeProduct(product.id);
  };

  return (
    <div className="flex h-24 gap-5 bg-slate-700 sm:h-32 ">
      <div className="w-32 bg-stone-800 sm:w-52">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-between w-full pt-3 pb-3 pr-4 text-sm text-white">
        <div>
          <div className="flex justify-between text-lg">
            <p>{name}</p>
            <div
              onClick={handleRemove}
              className="cursor-pointer font-semibold text-2xl leading-none"
            >
              x
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-lg text-yellow-500">
          <p>${price}</p>
        </div>
        <div className="flex justify-between">
          <div>Year: {production_year}</div>
          <div className="flex items-center gap-2 -mt-4">
            <button
              className="w-7 h-7 bg-black rounded text-white text-xl font-semibold"
              onClick={handleDecrease}
            >
              -
            </button>
            <div className="text-xl font-semibold">{quantity}</div>
            <button
              className="w-7 h-7 bg-black rounded text-white text-xl font-semibold"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
