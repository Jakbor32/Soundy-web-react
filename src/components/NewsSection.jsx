import React from "react";
import Card from "./card/Card";
import Button from "./Button";
import { featuredNews } from "../lib/Constants";

const NewsSection = () => {

  return (
    <section>
      <div className="container px-5 py-20 mx-auto md:px-20">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-5xl text-center text-white uppercase  font-epilogue">
            Featured News
          </h2>
          <div className="w-48 h-1 bg-redBarClr"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 py-10  lg:flex-row">
        {featuredNews.map((news) => (
            <Card
              key={news.id}
              image={news.image}
              imageAlt={news.imageAlt}
              date={news.date}
              dateNumber={news.dateNumber}
              title={news.title}
              description={news.description}
            />
          ))}
        </div>
        <div className="flex justify-center w-full tracking-widest uppercase">
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
