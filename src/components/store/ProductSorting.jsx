import React, { useState, useEffect } from "react";
import Select from "react-select";

const ProductSorting = ({ onFilterChange }) => {
  const [selectedSortingOptions, setSelectedSortingOptions] = useState("");
  const [selectedYearOptions, setSelectedYearOptions] = useState("");
  const [selectedShippingOptions, setSelectedShippingOptions] = useState("");
  const sortingOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "popular", label: "Most Popular" },
    { value: "topRated", label: "Top Rated" },
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to Low" },
  ];

  const yearOptions = [];
  const currentYear = new Date().getFullYear();

  for (let year = 2010; year <= currentYear; year++) {
    yearOptions.push({ value: year.toString(), label: year.toString() });
  }

  const shippingOptions = [
    { value: "parcelLocker", label: "Parcel Locker" },
    { value: "courier", label: "Courier" },
    { value: "post", label: "Post" },
    { value: "express", label: "Express" },
    { value: "pickup", label: "Pickup" },
  ];

  const handleFilterChange = () => {
    onFilterChange({
      sortingOptions: selectedSortingOptions,
      yearOptions: selectedYearOptions,
      shippingOptions: selectedShippingOptions,
    });
  };

  const colourStyles = {
    singleValue: (provided) => ({
      ...provided,
      color: "#FFF",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "rgb(76 5 25)",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 1)",
      borderRadius: "6px",
      width: window.innerWidth < 1280 ? "100%" : "20rem",
      padding: ".5rem 2rem",
    }),
    menuList: (styles) => ({
      ...styles,
      background: "rgb(44, 0, 0)",
      color: "#FFF",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? "rgb(76 5 25)"
        : isSelected
        ? "rgb(76 5 25)"
        : undefined,
      zIndex: 1,
      color: "#FFF",
    }),
    input: (provided) => ({
      ...provided,
      color: "#FFF",
    }),
  };

  useEffect(() => {
    handleFilterChange();
  }, [selectedSortingOptions, selectedYearOptions, selectedShippingOptions]);

  return (
    <div className="text-gray-600 container px-2 sm:px-20 py-10 mx-auto md:block">
      <div className="flex  justify-between flex-col xl:flex-row gap-2">
        <Select
          placeholder="Sort by"
          options={sortingOptions}
          styles={colourStyles}
          isMulti
          onChange={(selectedOptions) =>
            setSelectedSortingOptions(selectedOptions)
          }
        />
        <Select
          placeholder="Select Year"
          options={yearOptions}
          styles={colourStyles}
          isMulti
          onChange={(selectedOptions) =>
            setSelectedYearOptions(selectedOptions)
          }
        />
        <Select
          placeholder="Shipping Options"
          options={shippingOptions}
          styles={colourStyles}
          isMulti
          onChange={(selectedOptions) =>
            setSelectedShippingOptions(selectedOptions)
          }
        />
      </div>
    </div>
  );
};

export default ProductSorting;
