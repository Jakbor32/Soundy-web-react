import React from "react";

const Card = ({ image, date, title, description, imageAlt, dateNumber }) => {
  return (
    <div className="font-epilogue bg-featuredFooterBg  text-white max-w-[24rem] flex flex-col justify-between h-[40rem]">
      <div>
        <div className="max-h-[18rem]">
          <img className="w-full px-0" src={image} alt={imageAlt} />
        </div>
        <div className="px-6 pt-10">
          <time dateTime={dateNumber} className="text-[0.75rem]">
            {date}
          </time>
          <h4 className="py-3 text-xl text-featuredTitleClr font-gotu">
            {title}
          </h4>
          <div className="h-[0.1rem] w-32 bg-redBarClr"></div>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <p className="text-sm leading">{description}</p>
        </div>
      </div>
      <a className="text-[1.125rem] px-6 mb-3 text-gray-500 " href="#">
        Read more...
      </a>
    </div>
  );
};

export default Card;
