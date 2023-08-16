import React from "react";
import Card from "../card/Card";
import Button from "../common//Button";
import { featuredNews } from "../../lib/Constants";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const NewsSection = () => {
  return (
    <section>
      <div className="container px-5 mx-auto py-14 md:px-20">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-3xl text-center text-white uppercase md:text-4xl font-epilogue">
            Featured News
          </h2>
          <div className="w-48 h-1 bg-redBarClr"></div>
          <div className="h-1 md:h-4"></div>
        </div>
        <div className="flex items-center justify-center">
          <Splide
            aria-label="News"
            options={{
              type: "loop",
              autoplay: true,
              perPage: 3,
              width: "75rem",
              drag: false,
              perMove: 1,
              arrows: false,
              gap: "0.5rem",
              pagination: true,
              rewind: true,
              breakpoints: {
                450: {
                  perPage: 1,
                  width: "100%",
                },
                820: {
                  perPage: 1,
                  width: "24rem",
                },
                1280: {
                  perPage: 2,
                  width: "50rem",
                },
              },
              classes: {
                pagination: "splide__pagination pag-pagination",
                page: "splide__pagination__page pag-page",
              },
            }}
          >
            {featuredNews.map((news, index) => (
              <SplideSlide key={index}>
                <Card
                  key={news.id}
                  image={news.image}
                  imageAlt={news.imageAlt}
                  date={news.date}
                  dateNumber={news.dateNumber}
                  title={news.title}
                  description={news.description}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="flex justify-center w-full pt-10 tracking-widest uppercase">
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
