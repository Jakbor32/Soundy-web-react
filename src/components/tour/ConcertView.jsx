import React, { useState, useEffect } from "react";
import { cities } from "../../lib/Constants";

const ConcertView = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen relative md:-mb-60 -mb-64 sm:-mb-0">
      <video
        className="w-full h-3/4 absolute inset-y-0 object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/concert-view.mp4?alt=media&token=81a1a307-d56a-46b4-9156-79eefc29fd4f"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-70 h-3/4"></div>
      <div className="h-3/4 absolute inset-0 flex text-gray-400">
        <div className="h-3/4 container relative flex flex-col items-center gap-8 px-5 mx-auto my-0 text-center md:gap-3 md:pt-10 lg:items-start lg:px-20 lg:pt-16 lg:text-left">
          <h1 className="mb-4 max-w-[30rem] text-[2.25rem] font-bold uppercase leading-[3rem] lg:max-w-[45rem] lg:text-5xl lg:leading-[4.5rem] mt-24">
            Soundy Journeys: The Ultimate Music Experience
          </h1>
          <p className="max-w-[35rem] text-[1rem]  leading-[1.2rem] md:text-[1.20rem] lg:leading-[2.5rem]">
            <p className="text-left">We've already played in:</p>
            <div class="flex items-center w-64">
              <div class="w-max">
                <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl sm:text-5xl text-red-900 font-bold font-saira-stencil-one">
                  {cities[currentCityIndex]}
                </h1>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConcertView;
