import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { FaRetweet } from "react-icons/fa";

const Benefits = () => {
  return (
    <div className="bg-gray-800 p-8 md:flex md:justify-center text-white mt-10">
      <div className="md:w-1/3 p-4 flex flex-col items-center justify-center">
        <div className="text-4xl mb-4">
          <TbTruckDelivery size={64} color="FFF" />
        </div>
        <h2 className="text-xl font-bold mb-2">Free Delivery</h2>
        <p className="text-gray-300">Enjoy free delivery on all orders.</p>
      </div>

      <div className="md:w-1/3 p-4 flex flex-col items-center justify-center">
        <div className="text-4xl mb-4">
          <CiDiscount1 size={64} color="FFF" />
        </div>
        <h2 className="text-xl font-bold mb-2">Low Prices</h2>
        <p className="text-gray-300">
          Discover affordable prices on quality products.
        </p>
      </div>

      <div className="md:w-1/3 p-4 flex flex-col items-center justify-center">
        <div className="text-4xl mb-4">
          <FaRetweet size={64} color="FFF" />
        </div>
        <h2 className="text-xl font-bold mb-2">Free returns</h2>
        <p className="text-gray-300">
          Enjoy hassle-free returns on all purchases.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
