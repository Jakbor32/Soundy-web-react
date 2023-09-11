import React from "react";
import { galleryData } from "../../lib/Constants";
import Masonry from "react-masonry-css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const responsive = {
    default: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="container mx-auto mt-32 lg:px-20 px-0">
      <Masonry
        breakpointCols={responsive}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryData.map((image, index) => (
          <LazyLoadImage
            src={image}
            height={500}
            width={200}
            className="w-full h-auto py-3 sm:px-0 px-5"
            effect="blur"
            alt={`Soundy-Image-${index + 1}`}
          />
        ))}
      </Masonry>
    </div>
  );
};

export default trackWindowScroll(Gallery);
