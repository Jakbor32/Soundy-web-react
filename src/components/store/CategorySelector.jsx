import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AiFillCaretDown } from "react-icons/ai";

const CategorySelector = ({onSelectCategory}) => {
  const [ref, inView] = useInView({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expanded, setExpanded] = useState(false);

  const categories = [
    "T-shirts",
    "Guitars",
    "CDs and vinyl records",
    "Souvenirs related to favorite bands and artists",
    "Drum kits and percussion accessories",
    "Music software",
    "Studio equipment",
  ];

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      onSelectCategory("");
    } else {
      setSelectedCategory(categoryName);
      onSelectCategory(categoryName);
      setTimeout(() => {
        setExpanded(!expanded);
      }, 200);
    }
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth < 640;

  return (
    <div
      ref={ref}
      className={`text-white w-full bg-stone-800 ${
        inView ? "sticky top-20" : ""
      } ${
        isMobile
          ? expanded
            ? "h-1/1"
            : "h-[3.5rem] overflow-hidden"
          : "h-[90vh] xl:h-fit"
      } overflow-auto`}
    >
      <div
        className="text-center text-xl pt-3 flex items-center justify-center gap-4 cursor-pointer"
        onClick={toggleExpansion}
      >
        <div>Select Category</div>
        <div
          className={`transform ${
            expanded ? "rotate-180" : "rotate-0"
          } transition ${!isMobile ? "hidden" : ""}`}
        >
          <AiFillCaretDown size={32} />
        </div>
      </div>
      <ul className="p-4">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`mb-4 p-4 rounded cursor-pointer hover:bg-stone-950 transform transition ${
              selectedCategory === category
                ? "scale-90 bg-stone-950"
                : "scale-100 bg-stone-900"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;
