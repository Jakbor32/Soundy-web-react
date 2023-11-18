import React, { useState, useEffect, useMemo, useCallback } from "react";
import CategorySelector from "./CategorySelector";
import StorePagination from "./StorePagination";
import ProductSorting from "./ProductSorting";
import SearchBar from "./SearchBar";
import { products } from "../../lib/Constants";

const Items = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const [selectedYearOptions, setSelectedYearOptions] = useState(null);
  const [selectedSortingOptions, setSelectedSortingOptions] = useState(null);
  const [selectedShippingOptions, setSelectedShippingOptions] = useState(null);
  const [filteredProductsCopy, setFilteredProductsCopy] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 16;

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
  };

  const handleSortChange = (selectedSortOption) => {
    setSelectedSortingOptions(selectedSortOption);
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

  useEffect(() => {
    let filteredProductsCopy = [...products];
    // Searchbar
    if (searchQuery) {
      const searchTerms = searchQuery.toLowerCase().split(" ");
  
      filteredProductsCopy = filteredProductsCopy.filter((product) =>
        searchTerms.every((term) =>
          product.name.toLowerCase().includes(term)
        )
      );
    }

    // Category
    if (selectedCategory && selectedCategory !== "") {
      filteredProductsCopy = filteredProductsCopy.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Year
    if (selectedYearOptions && selectedYearOptions.length > 0) {
      filteredProductsCopy = filteredProductsCopy.filter((product) =>
        selectedYearOptions.some(
          (option) =>
            option.value === product.production_year &&
            (!selectedCategory || product.category === selectedCategory)
        )
      );
    }

    // Delivery type 
    if (selectedShippingOptions && selectedShippingOptions.length > 0) {
      filteredProductsCopy = filteredProductsCopy.filter((product) =>
        Array.isArray(product.delivery_type)
          ? product.delivery_type.some((type) =>
              selectedShippingOptions.some(
                (option) =>
                  option.value === type &&
                  (!selectedCategory || product.category === selectedCategory)
              )
            )
          : selectedShippingOptions.some(
              (option) =>
                option.value === product.delivery_type &&
                (!selectedCategory || product.category === selectedCategory)
            )
      );
    }

    // Sort price
    if (selectedSortingOptions) {
      if (selectedSortingOptions.value === "lowToHigh") {
        filteredProductsCopy.sort((a, b) => a.price - b.price);
      } else if (selectedSortingOptions.value === "highToLow") {
        filteredProductsCopy.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProductsCopy(filteredProductsCopy);
  }, [
    searchQuery,
    selectedCategory,
    selectedYearOptions,
    selectedSortingOptions,
    selectedShippingOptions,
    products,
  ]);

  const filteredProducts = useMemo(() => {
    return filteredProductsCopy.slice(startIndex, endIndex);
  }, [filteredProductsCopy, startIndex, endIndex]);

  useEffect(() => {
    setUpdatedProducts(filteredProducts);
  }, [filteredProducts, startIndex, endIndex]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    const targetElement = document.getElementById("startHandler");
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: targetPosition,
      });
    }
  };

  const handleFilterChange = useCallback((selectedFilters) => {
    const { yearOptions, shippingOptions } = selectedFilters;
    setSelectedYearOptions(yearOptions);
    setSelectedShippingOptions(shippingOptions);
    setCurrentPage(1);
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ProductSorting
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <div
        id="startHandler"
        className={`container px-0 sm:px-5 mx-auto md:px-20 flex gap-3 ${
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
          {updatedProducts.length === 0 && (
            <div className="col-span-3 text-white text-center p-8">
              No products found. Please change the category or apply different
              filters.
            </div>
          )}

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
              <p className="text-white">{`Shipping: ${product.delivery_type}`}</p>
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
        totalProducts={filteredProductsCopy.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Items;
