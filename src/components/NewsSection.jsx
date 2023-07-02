import React from "react";
import Card from "./card/Card";
import Button from "./Button";
import { featuredNews } from "../lib/Constants";

const NewsSection = () => {

  return (
    <section>
      <div className="container mx-auto md:px-20 py-20 px-5">
        <div className="flex flex-col items-center gap-8">
          <h2 className=" text-center font-epilogue text-5xl uppercase text-white">
            Featured News
          </h2>
          <div className="h-1 w-48 bg-redBarClr"></div>
        </div>
        <div className=" flex-col flex justify-center items-center gap-8 py-10 lg:flex-row">
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
        <div className="flex w-full justify-center uppercase tracking-widest">
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
