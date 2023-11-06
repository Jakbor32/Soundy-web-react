import React, { useState, useEffect } from "react";
import CategorySelector from "./CategorySelector";
import StorePagination from "./StorePagination";

const Items = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const products = [
    { id: 1, name: "Product 1", price: 10.99, image: "image-url-1" },
    { id: 2, name: "Product 2", price: 19.99, image: "image-url-2" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
    { id: 1, name: "Product 1", price: 10.99, image: "image-url-1" },
    { id: 2, name: "Product 2", price: 19.99, image: "image-url-2" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
    { id: 1, name: "Product 1", price: 10.99, image: "image-url-1" },
    { id: 2, name: "Product 2", price: 19.99, image: "image-url-2" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
    { id: 1, name: "Product 1", price: 10.99, image: "image-url-1" },
    { id: 2, name: "Product 2", price: 19.99, image: "image-url-2" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
    { id: 1, name: "Product 1", price: 10.99, image: "image-url-1" },
    { id: 2, name: "Product 2", price: 19.99, image: "image-url-2" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
    { id: 3, name: "Product 3", price: 15.99, image: "image-url-3" },
  ];
  const isCategorySelectorHidden = windowWidth < 640;
  return (
    <>
      <div
        className={`container px-0 sm:px-5 mx-auto  md:px-20 flex gap-3 ${
          isCategorySelectorHidden ? "flex-col" : "flex-row"
        }`}
      >
        <div className="xl:w-1/4 md:w-[25rem] sm:w-[20rem]">
          <CategorySelector />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  ${
            isCategorySelectorHidden ? "w-full p-2" : "w-3/4"
          }`}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-stone-700 shadow-md p-4 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-white">${product.price}</p>
              <button className="bg-gray-800 text-white rounded px-4 py-2 mt-2">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <StorePagination />
    </>
  );
};

export default Items;
