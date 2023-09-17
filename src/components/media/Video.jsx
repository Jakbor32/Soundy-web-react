import React, { useState } from "react";
import { videoData, titleVideo } from "../../lib/Constants";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Masonry from "react-masonry-css";
import VideoModal from "../common/VideoModal";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Video = () => {
  const responsive = {
    default: 3,
    1000: 2,
    500: 1,
  };

  // open a modal with a specific id assigned to the yt link
  
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const openModal = (index) => {
    setSelectedVideoIndex(index);
  };

  return (
    <div className="container px-0 mx-auto lg:px-20">
      <h2 className="pb-5 text-3xl text-center text-white uppercase md:text-4xl font-epilogue">
        {titleVideo}
      </h2>
      <Masonry
        breakpointCols={responsive}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {videoData.map((thumbnail, index) => (
          <div
            key={index}
            className="relative group"
            onClick={() => openModal(index)}
          >
            <LazyLoadImage
              src={thumbnail.url}
              height={500}
              width={200}
              className="w-full h-auto px-5 sm:px-0"
              effect="blur"
              alt={`Video-thumbnail-${index + 1}`}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-100 sm:px-0 px-5 mb-1.5 group-hover:opacity-100">
              <h3 className="flex flex-col items-center justify-center w-full h-full gap-3 text-2xl text-center bg-black cursor-pointer group bg-opacity-70 font-saira-stencil-one">
                <div className="opacity-60">
                  <AiOutlinePlayCircle size={90} />
                </div>
                <span className="absolute transition-all opacity-70 bottom-5 sm:bottom-1 group-hover:opacity-70 group-hover:bottom-5 sm:opacity-0">
                  {thumbnail.title}
                </span>
              </h3>
            </div>
          </div>
        ))}
      </Masonry>
      {selectedVideoIndex !== null && (
        <VideoModal
          videoUrl={videoData[selectedVideoIndex].videoSrc}
          closeModal={() => setSelectedVideoIndex(null)}
        ></VideoModal>
      )}
    </div>
  );
};

export default trackWindowScroll(Video);
