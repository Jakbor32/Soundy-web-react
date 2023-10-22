import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CollectionCard = ({ image, imageAlt }) => {
  return (
    <div className="font-epilogue bg-featuredFooterBg text-white max-w-[30rem] flex flex-col justify-between h-[21rem] sm:h-[23rem] relative overflow-hidden">
      <div>
        <div className="absolute w-full sm:w-[24rem] md:w-[26rem] lg:w-[28rem]">
          <img className="px-0" src={image} alt={imageAlt} />
          <div class="absolute top-5 -left-12 w-48 text-center bg-red-800 text-white font-bold py-2 px-2 -rotate-45 z-50 tracking-widest shadow-md shadow-black">
            <span className="animate-ping">NEW</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 items-center p-4 z-10">
        <button className="bg-stone-800 hover:bg-stone-600 font-bold py-2 px-4 ">
          Buy now
        </button>
        <div className="cursor-pointer flex items-center">
          <span className="text-xl mr-2">
            <AiOutlineShoppingCart size={32} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
