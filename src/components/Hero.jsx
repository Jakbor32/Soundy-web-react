import React from "react";

import backgroundImage from "../assets/hero-background.jpg";
import { mainTitle, subTitle, musicStats, links } from "../lib/Constants";
import Button from "./Button";

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
  };

  return (
    <section
      className="w-full bg-cover bg-center py-24 text-white"
      style={sectionStyle}
    >
      <div className="container relative mx-auto my-0 flex h-full flex-col items-center gap-8 px-5 text-left">
        <h1 className="mb-4 max-w-[30rem] text-[2.25rem] font-bold uppercase leading-[3rem]">
          {mainTitle}
        </h1>
        <p className="max-w-[35rem] text-[1rem]  leading-[1.2rem]">
          {subTitle}
        </p>
        <div className="mb-0 mt-5 flex  flex-wrap justify-center">
          <Button to="/store">{links.store.text}</Button>
          <Button to="#newsletter" border={false}>
            {links.newsletter.text}
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="mr-4 flex items-center gap-5">
            <div className="hidden h-20 min-w-[10px] self-end bg-white bg-opacity-40  shadow-lg blur-[2px]"></div>
            <div className="flex flex-col justify-center">
              <p className="font-saira-stencil-one text-4xl font-medium">
                {musicStats.numFans}
                <span className="text-6xl text-plusArrowClr">+</span>
              </p>
              <p className="max-w-xs lg:text-xl">
                {musicStats.fansDescription}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden h-20 min-w-[10px] self-end bg-white bg-opacity-40 shadow-lg blur-[2px]"></div>
            <div>
              <p className="font-saira-stencil-one text-4xl font-medium">
                {musicStats.numConcerts}
                <span className="text-6xl text-plusArrowClr">+</span>
              </p>
              <p className="max-w-md">{musicStats.concertsDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
