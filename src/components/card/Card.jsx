import React from "react";

const Card = ({ image, date, title, description, imageAlt, dateNumber }) => {
  return (
    <div className="font-epilogue bg-featuredFooterBg border-8 border-slate-950 text-white max-w-[24rem]">
      <div>
        <img className="w-full" src={image} alt={imageAlt} />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <time dateTime={dateNumber} className="text-[0.75rem]">
          {date}
        </time>
        <h4 className="text-featuredTitleClr font-gotu text-xl">
          {title}
        </h4>
        <div className="h-[0.1rem] w-32 bg-redBarClr"></div>
        <p className="leading-7">{description}</p>
        <a className="text-[1.125rem] text-gray-500 mt-8" href="#">
          Read more...
        </a>
      </div>
    </div>
  );
};

export default Card;