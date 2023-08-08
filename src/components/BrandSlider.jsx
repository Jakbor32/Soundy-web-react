import React from "react";
import { brandLogos } from "../lib/Constants";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const BrandSlider = () => {
  
  return (
    <section className="relative shadow-md bg-brandBarClr shadow-black">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white opacity-5"></div>
      <div className="container flex flex-row  px-5 mx-auto md:px-20 h-24 items-center">
      <Splide
            aria-label="BrandSlider"
            options={{
              type   : 'loop',
              drag   : 'free',
              width  : "100%",
              pagination: false,
              perPage: 6,
              arrows:false,
              AutoScroll: {
                speed: 0.25,
              },
              breakpoints: {
                1000: {
                  perPage: 3,
                },
                600:{
                  perPage: 2,
                },
              },
            }}
            extensions={ { AutoScroll } }
          >
          
        {brandLogos.map((logo,index) => (
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