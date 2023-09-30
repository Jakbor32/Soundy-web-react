import React, { useEffect, useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);

  // Slow down video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <div className="relative h-screen">
      <video ref={videoRef} autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover blur-sm sm:blur-md">
        <source src="https://firebasestorage.googleapis.com/v0/b/soundy-web-react.appspot.com/o/soundy-hero-video.mp4?alt=media&token=7570e400-a9fe-42fc-9396-adbc1d12c666&_gl=1*1juto2s*_ga*MTQxMDU3Mjg0Ni4xNjkxNDQyMDYz*_ga_CW55HF8NVT*MTY5NjA5OTg0My4xMi4xLjE2OTYwOTk4NjkuMzQuMC4w" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 blur-sm sm:blur-md"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 px-10">
        <p className="text-6xl px-3 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-epilogue tracking-wide leading-loose sm:leading-2">
          Where words fail, music speaks
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
