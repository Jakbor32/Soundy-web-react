import React from "react";
import { newCollection } from "../../lib/Constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CollectionCard from "./CollectionCard";

const NewCollection = () => {
  return (
    <section>
      <div className="container px-0 sm:px-5 mx-auto py-14 md:px-20">
        <div className="flex items-center justify-center">
          <Splide
            aria-label="News"
            options={{
              type: "loop",
              autoplay: true,
              perPage: 4,
              width: "98vw",
              drag: true,
              perMove: 1,
              arrows: true,
              gap: "0.5rem",
              pagination: false,
              rewind: true,
              breakpoints: {
                450: {
                  perPage: 1,
                  width: "98vw",
                },
                820: {
                  perPage: 1,
                  width: "100%",
                },
                1280: {
                  perPage: 2,
                  width: "98vw",
                },
                1820: {
                  perPage: 3,
                  width: "98vw",
                },
              },
              classes: {
                pagination: "splide__pagination pag-pagination",
                page: "splide__pagination__page pag-page",
              },
            }}
          >
            {newCollection.map((newItem, index) => (
              <SplideSlide key={index}>
                <CollectionCard
                  key={newItem.id}
                  image={newItem.image}
                  imageAlt={newItem.imageAlt}
                 
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;