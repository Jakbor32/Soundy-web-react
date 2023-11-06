import React, { useState, useEffect } from "react";
import CategorySelector from "./CategorySelector";
import StorePagination from "./StorePagination";

const Items = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 21; 

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
    { id: 4, name: "Product 4", price: 12.49, image: "image-url-4" },
    { id: 5, name: "Product 5", price: 8.99, image: "image-url-5" },
    { id: 6, name: "Product 6", price: 24.99, image: "image-url-6" },
    { id: 7, name: "Product 7", price: 7.99, image: "image-url-7" },
    { id: 8, name: "Product 8", price: 16.99, image: "image-url-8" },
    { id: 9, name: "Product 9", price: 11.99, image: "image-url-9" },
    { id: 10, name: "Product 10", price: 14.99, image: "image-url-10" },
    { id: 11, name: "Product 11", price: 18.99, image: "image-url-11" },
    { id: 12, name: "Product 12", price: 22.99, image: "image-url-12" },
    { id: 13, name: "Product 13", price: 9.99, image: "image-url-13" },
    { id: 14, name: "Product 14", price: 13.99, image: "image-url-14" },
    { id: 15, name: "Product 15", price: 17.99, image: "image-url-15" },
    { id: 16, name: "Product 16", price: 21.99, image: "image-url-16" },
    { id: 17, name: "Product 17", price: 6.99, image: "image-url-17" },
    { id: 18, name: "Product 18", price: 23.99, image: "image-url-18" },
    { id: 19, name: "Product 19", price: 20.99, image: "image-url-19" },
    { id: 20, name: "Product 20", price: 25.99, image: "image-url-20" },
    { id: 21, name: "Product 21", price: 25.99, image: "image-url-21" },
    { id: 22, name: "Product 22", price: 29.99, image: "image-url-22" },
    { id: 23, name: "Product 23", price: 27.99, image: "image-url-23" },
    { id: 24, name: "Product 24", price: 31.49, image: "image-url-24" },
    { id: 25, name: "Product 25", price: 18.99, image: "image-url-25" },
    { id: 26, name: "Product 26", price: 34.99, image: "image-url-26" },
    { id: 27, name: "Product 27", price: 11.99, image: "image-url-27" },
    { id: 28, name: "Product 28", price: 21.99, image: "image-url-28" },
    { id: 29, name: "Product 29", price: 19.99, image: "image-url-29" },
    { id: 30, name: "Product 30", price: 14.99, image: "image-url-30" },
    { id: 31, name: "Product 31", price: 24.99, image: "image-url-31" },
    { id: 32, name: "Product 32", price: 26.99, image: "image-url-32" },
    { id: 33, name: "Product 33", price: 12.99, image: "image-url-33" },
    { id: 34, name: "Product 34", price: 16.99, image: "image-url-34" },
    { id: 35, name: "Product 35", price: 28.99, image: "image-url-35" },
    { id: 36, name: "Product 36", price: 32.99, image: "image-url-36" },
    { id: 37, name: "Product 37", price: 9.99, image: "image-url-37" },
    { id: 38, name: "Product 38", price: 13.99, image: "image-url-38" },
    { id: 39, name: "Product 39", price: 17.99, image: "image-url-39" },
    { id: 40, name: "Product 40", price: 36.99, image: "image-url-40" },
    { id: 41, name: "Product 41", price: 38.99, image: "image-url-41" },
    { id: 42, name: "Product 42", price: 33.99, image: "image-url-42" },
    { id: 43, name: "Product 43", price: 37.99, image: "image-url-43" },
    { id: 44, name: "Product 44", price: 39.99, image: "image-url-44" },
    { id: 45, name: "Product 45", price: 35.99, image: "image-url-45" },
    { id: 46, name: "Product 46", price: 40.99, image: "image-url-46" },
    { id: 47, name: "Product 47", price: 42.99, image: "image-url-47" },
    { id: 48, name: "Product 48", price: 43.99, image: "image-url-48" },
    { id: 49, name: "Product 49", price: 45.99, image: "image-url-49" },
    { id: 50, name: "Product 50", price: 46.99, image: "image-url-50" },
    { id: 51, name: "Product 51", price: 47.99, image: "image-url-51" },
    { id: 52, name: "Product 52", price: 48.99, image: "image-url-52" },
    { id: 53, name: "Product 53", price: 49.99, image: "image-url-53" },
    { id: 54, name: "Product 54", price: 50.99, image: "image-url-54" },
    { id: 55, name: "Product 55", price: 51.99, image: "image-url-55" },
    { id: 56, name: "Product 56", price: 52.99, image: "image-url-56" },
    { id: 57, name: "Product 57", price: 53.99, image: "image-url-57" },
    { id: 58, name: "Product 58", price: 54.99, image: "image-url-58" },
    { id: 59, name: "Product 59", price: 55.99, image: "image-url-59" },
    { id: 60, name: "Product 60", price: 56.99, image: "image-url-60" },
    { id: 61, name: "Product 61", price: 57.99, image: "image-url-61" },
    { id: 62, name: "Product 62", price: 58.99, image: "image-url-62" },
    { id: 63, name: "Product 63", price: 59.99, image: "image-url-63" },
  ];
  const isCategorySelectorHidden = windowWidth < 640;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  // Set next/prev page + scroll to on top of products
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    const targetElement = document.getElementById("startHandler");
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        id="startHandler"
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
          {currentProducts.map((product) => (
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
      <StorePagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Items;
