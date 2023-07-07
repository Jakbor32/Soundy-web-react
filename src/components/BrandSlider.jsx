import React from "react";
import { brandLogos } from "../lib/Constants";

const BrandSlider = () => {
  return (
    <section className="relative shadow-md bg-brandBarClr shadow-black">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white opacity-5"></div>
      <div className="container flex flex-row flex-wrap items-center justify-center gap-6 px-5 py-5 mx-auto lg:justify-between md:px-20 lg:gap-0">
        {brandLogos.map((logo) => (
          <img
            key={logo.src}
            className="h-8 xl:h-16 md:h-12"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default BrandSlider;