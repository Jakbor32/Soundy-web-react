import React from "react";

const CartItem = () => {
  return (
    <div className="flex h-24 gap-5 bg-stone-400 sm:h-32 ">
      <div className="w-32 bg-stone-800 sm:w-52"></div>
      <div className="flex flex-col justify-between w-full pt-3 pb-3 pr-4 text-sm text-black">
        <div>
          <div className="flex justify-between">
            <p>Test item card</p>
            <div>X</div>
          </div>
          <div className="flex gap-2">
            <div>In stock</div>
            <div>Boy</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>$41.20</p>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 bg-white rounded">-</button>
            <div>1</div>
            <button className="w-6 h-6 bg-white rounded">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
