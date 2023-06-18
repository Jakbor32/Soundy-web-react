import React from "react";

import backgroundImage from "../assets/hero-background.jpg";
import { mainTitle, subTitle, musicStats } from "../lib/Constants";
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
      <div>
        <h1>{mainTitle}</h1>
        <p>{subTitle}</p>
        <div>
          <Button to="/store">{links.store.text}</Button>
          <Button to="#newsletter" border={false}>
            {links.newsletter.text}
          </Button>
        </div>
        <div>
          <div>
            <div>bar</div>
            <div>
              <p>
                {musicStats.numFans}
                <span>+</span>
              </p>
              <p>{musicStats.fansDescription}</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <p>
                {musicStats.numConcerts}
                <span>+</span>
              </p>
              <p>{musicStats.concertsDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
