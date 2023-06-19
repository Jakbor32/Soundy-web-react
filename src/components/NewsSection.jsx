import React from "react";
import Card from "./card/Card";
import Button from "./Button";
const NewsSection = () => {
  return (
    <section>
      <div className="container mx-auto px-20 py-20">
        <div className="flex flex-col items-center gap-8">
          <h2 className=" text-center font-epilogue text-5xl uppercase text-white">
            Featured News
          </h2>
          <div className="h-1 w-48 bg-redBarClr"></div>
        </div>
        <div className="flex justify-center gap-5 py-10">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex w-full justify-center uppercase tracking-widest">
          <Button>View All</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
