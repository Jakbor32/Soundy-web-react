import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { promotionSectionTitle, promotionSlides } from "../lib/Constants";
import Button from "./Button";

const PromotionsCarousel = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-8 py-10 mx-auto">
        <h2 className="text-3xl text-center text-white uppercase md:text-4xl font-epilogue">
          {promotionSectionTitle}
        </h2>
        <div className="w-48 h-1 bg-redBarClr"></div>
      </div>
      <div className="bg-zinc-900">
        <div className="container w-full py-3 mx-auto text-white lg:px-20 xl:py-0">
          <Splide
            aria-label="Promotions"
            options={{
              type: "loop",
              autoplay: true,
              arrows: false,
              pagination: false,
              rewind: true,
            }}
          >
            {promotionSlides.map((slide, index) => (
              <SplideSlide key={index}>
                <div className="flex xl:flex-row w-full bg-zinc-900 xl:h-[40rem] h-[60rem] items-center justify-center flex-col-reverse gap-5 xl:gap-0 ">
                  <div className="flex flex-col items-center justify-center  lg:h-full h-[32rem] gap-3 pl-20 pr-24 xl:gap-10 xl:items-start"> 
                    <h3 className="text-3xl tracking-wide uppercase xl:text-6xl font-saira-stencil-one">
                      {slide.title}
                    </h3>
                    <p className="text-xl italic font-light text-center uppercase xl:text-4xl xl:text-left ">
                      {slide.description}
                    </p>
                    <div className="">
                      <p className="font-light text-center uppercase xl:text-left">
                        {slide.customerTitle}
                      </p>
                      <div className="flex">
                        {slide.rating.map((index) => (
                          <AiFillStar
                            key={index}
                            size="42"
                            className="text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 xl:flex-row xl:gap-5">
                      <Button>Buy now</Button>
                      <div className="flex gap-5">
                        <p className="text-5xl xl:pl-40 font-oregano xl:text-9xl">
                          {slide.discount}
                        </p>
                        <div className="relative">
                          <div className="absolute opacity-30">
                            <p className="text-5xl font-oregano xl:text-9xl">
                              {slide.price}
                            </p>
                            <div className="w-full h-1 rotate-45 bg-red-800 -translate-y-7 lg:-translate-y-16"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      {slide.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <AiOutlineCheck className="text-xl text-green-600" />
                          <p className="font-bold uppercase">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="z-10 flex xl:self-end ">
                    <img
                      src={slide.img}
                      alt={slide.imgDesc}
                      className="w-80 lg:w-full"
                    />
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default PromotionsCarousel;