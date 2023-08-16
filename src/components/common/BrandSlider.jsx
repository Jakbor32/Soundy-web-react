import React from "react";
import { brandLogos } from "../../lib/Constants";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const BrandSlider = () => {
  return (
    <section className="relative shadow-md bg-stone-800 shadow-black">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white opacity-5"></div>
      <div className="container flex flex-row items-center h-24 px-5 mx-auto md:px-20">
        <Splide
          aria-label="BrandSlider"
          extensions={{ AutoScroll }}
          options={{
            type: "loop",
            width: "100%",
            pagination: false,
            perPage: 6,
            drag: false,
            arrows: false,
            autoScroll: {
              speed: 1.2,
              pauseOnHover: false,
            },
            breakpoints: {
              1000: {
                perPage: 3,
              },
              600: {
                perPage: 2,
              },
            },
          }}
        >
          {brandLogos.map((logo, index) => (
            <SplideSlide key={index}>
              <img
                key={logo.src}
                className="h-full px-5 xl:px-10"
                src={logo.src}
                alt={logo.alt}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default BrandSlider;
