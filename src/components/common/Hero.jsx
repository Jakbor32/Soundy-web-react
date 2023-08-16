import React from "react";

import backgroundImage from "../../assets/hero-background.jpg";
import { mainTitle, subTitle, musicStats, links } from "../../lib/Constants";
import Button from "./Button";

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
  };

  return (
    <section
      className="w-full py-24 text-white bg-center bg-cover"
      style={sectionStyle}
    >
      <div className="container relative flex flex-col items-center h-full gap-8 px-5 mx-auto my-0 text-center md:gap-3 md:pt-10 lg:items-start lg:px-20 lg:pt-16 lg:text-left">
        <h1 className="mb-4 max-w-[30rem] text-[2.25rem] font-bold uppercase leading-[3rem] lg:max-w-[40rem] lg:text-5xl lg:leading-[4.5rem] ">
          {mainTitle}
        </h1>
        <p className="max-w-[35rem] text-[1rem]  leading-[1.2rem] md:text-[1.20rem] lg:leading-[2.5rem]">
          {subTitle}
        </p>
        <div className="flex flex-wrap justify-center mt-5 mb-0 md:my-3 md:justify-start">
          <Button to="/store">{links.store.text}</Button>
          <Button to="#newsletter" border={false}>
            {links.newsletter.text}
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-normal">
          <div className="flex items-center gap-5 mr-4 lg:mr-12">
            <div className="hidden h-20 min-w-[10px] self-end bg-white bg-opacity-40  shadow-lg blur-[2px] md:h-24 lg:block lg:h-28"></div>
            <div className="flex flex-col justify-center">
              <p className="text-4xl font-medium font-saira-stencil-one lg:text-6xl">
                {musicStats.numFans}
                <span className="text-6xl text-plusArrowClr lg:text-8xl">
                  +
                </span>
              </p>
              <p className="max-w-xs lg:text-xl">
                {musicStats.fansDescription}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden h-20 min-w-[10px] self-end bg-white bg-opacity-40 shadow-lg blur-[2px] md:h-24 lg:block lg:h-28"></div>
            <div>
              <p className="text-4xl font-medium font-saira-stencil-one lg:text-6xl">
                {musicStats.numConcerts}
                <span className="text-6xl text-plusArrowClr lg:text-8xl">
                  +
                </span>
              </p>
              <p className="max-w-md lg:text-xl">
                {musicStats.concertsDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
