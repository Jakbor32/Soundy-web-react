import React from "react";
import { newCollection } from "../../lib/Constants";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NewCollection = () => {
  return (
    <section>
      <div className="container px-0 sm:px-5 mx-auto py-14 md:px-20">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          {newCollection.map((newItem) => (
            <div className="font-epilogue text-white lg:w-screen mt-10 w-full">
              <div className="flex items-center">
                <img
                  className="lg:min-w-max w-[15rem]"
                  src={newItem.image}
                  alt={newItem.imageAlt}
                />

                <div className="flex gap-3 flex-col  w-full lg:w-[30rem] -ml-20 lg:ml-0">
                  <div className="font-gotu lg:text-6xl  text-center text-3xl italic">
                    {newItem.price}{" "}
                    <span className="lg:text-7xl text-4xl">$</span>
                  </div>
                  <div className="lg:text-5xl text-xl mr-5 lg:mr-0 font-oregano text-center">
                    {newItem.desc}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 items-center">
                <button className="bg-stone-800 hover:bg-stone-600 font-bold py-2 px-5">
                  Buy now
                </button>
                <div className="cursor-pointer flex items-center">
                  <span className="text-xl pr-5">
                    <AiOutlineShoppingCart size={32} />
                  </span>
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
