import React from "react";

import { AiOutlineRightCircle } from "react-icons/ai";
import {
  promotionSectionTitle,
  bigSaleText,
  promotionItem,
  promotionImg,
  describeItemText,
  orderNow,
  promotionFeatures,
} from "../../lib/Constants";

const PromotionSection = () => {
  return (
    <section className="container flex flex-wrap items-center justify-center gap-6 px-5 py-5 mx-auto text-white lg:px-20 lg:justify-between">
      <div className="flex flex-col items-center gap-8 py-10 mx-auto">
        <h2 className="text-3xl text-center uppercase md:text-4xl font-epilogue">
          {promotionSectionTitle}
        </h2>
        <div className="w-48 h-1 bg-redBarClr"></div>
      </div>
      <div className="flex flex-col-reverse justify-between w-full p-10 md:p-20 lg:flex-row bg-slate-950">
        <div className="flex flex-col gap-2 ">
          <div className="text-4xl font-light font-rubik">{promotionItem}</div>
          <div className="text-6xl text-yellow-600 uppercase xl:text-7xl 2xl:text-8xl font-saira-stencil-one">
            {bigSaleText}
          </div>
          <p className="w-full text-base sm:w-96 lg:w-72 md:text-sm">
            {describeItemText}
          </p>
          {promotionFeatures.map((feature, index) => (
            <p key={index} className="flex items-center gap-1">
              {feature.icon}
              {feature.text}
            </p>
          ))}
          <button className="flex items-center gap-3 px-5 py-2 mt-5 text-xl bg-yellow-500 rounded-xl w-max text-blue-950">
            {orderNow} <AiOutlineRightCircle fontSize={26} />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={promotionImg} alt="guitar" />
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
