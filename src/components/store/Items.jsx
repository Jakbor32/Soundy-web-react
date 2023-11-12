import React, { useState, useEffect, useMemo } from "react";
import CategorySelector from "./CategorySelector";
import StorePagination from "./StorePagination";
import ProductSorting from "./ProductSorting";
import { products } from "../../lib/Constants";

const Items = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCategorySelectorHidden = windowWidth < 640;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory == null || selectedCategory === "") {
        return true;
      } else {
        return product.category === selectedCategory;
      }
    });
  }, [selectedCategory, products]);

  useEffect(() => {
    setUpdatedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, startIndex, endIndex]);


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
  const handleFilterChange = (selectedFilters) => {
    console.log(selectedFilters);
    console.log(filteredProducts.length)
  };

  return (
    <>
      <ProductSorting onFilterChange={handleFilterChange} />
      <div
        id="startHandler"
        className={`container px-0 sm:px-5 mx-auto  md:px-20 flex gap-3 ${
          isCategorySelectorHidden ? "flex-col" : "flex-row"
        }`}
      >
        <div className="xl:w-1/4 md:w-[25rem] sm:w-[20rem] mx-auto px-10 sm:px-0">
          <CategorySelector onSelectCategory={handleSelectCategory} />
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  ${
            isCategorySelectorHidden ? "w-full p-4" : "w-3/4"
          }`}
        >
          {updatedProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-stone-700 shadow-md p-4 rounded-lg ${
                updatedProducts.length < 5 ? "h-fit" : "h-full"
              }`}
            >
              <img src={product.src} alt={product.alt} className="w-full" />
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
        totalProducts={filteredProducts.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Items;
