import React from "react";

import backgroundImage from "../assets/hero-background.jpg";

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
  };

  return (
    <section
      className="w-full bg-cover bg-center py-24 text-white"
      style={sectionStyle}
    >
      Hero
    </section>
  );
};

export default Hero;
