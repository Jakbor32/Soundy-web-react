import React from "react";
import { socialLinks } from "../../lib/Constants";
import {
  LazyLoadImage
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TeamMemberCard = ({ name, surname, desc, url, alt, reverse }) => {
  const isMobile = window.innerWidth <= 1000;

  const imagePositionClass = isMobile ? "order-1" : reverse ? "order-2" : "order-1";
  const textPositionClass = isMobile ? "order-1" : reverse ? "order-1" : "order-2";

  return (
    <div className="container sm:px-20 sm:py-10 py-5 px-2 mx-auto block">
      <div
        className={`flex flex-col lg:flex-row items-center mb-8 justify-between`}
      >
        <div className={`w-full lg:w-1/2 ${imagePositionClass} lg:px-4`}>
           <LazyLoadImage
            src={url}
            height={500}
            width={200}
            className="w-full h-auto px-2 sm:px-0"
            effect="blur"
            alt={alt}
          />
        </div>
        <div className={`w-full lg:w-1/2 ${textPositionClass} px-4 lg:pr-4 lg:pt-0 pt-5`}>
          <h2 className="text-6xl font-bold mb-2 text-gray-200 font-oregano">
            {name} {surname}
          </h2>
          <div className="w-48 h-1 my-5 bg-redBarClr"></div>
          <p className="sm:text-4xl text-2xl text-gray-400 sm:leading-10 font-oregano">
            {desc}
          </p>
          <div className="flex gap-4 text-gray-500 py-5">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
