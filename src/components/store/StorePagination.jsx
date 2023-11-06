import React from "react";

const StorePagination = ({
  currentPage,
  productsPerPage,
  totalProducts,
  onPageChange,
}) => {
  
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center space-x-4 mt-10">
      {currentPage > 1 ? (
        <button
          className="px-4 py-2 rounded-md bg-gray-300"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
      ) : (
        <button className="px-4 py-2 rounded-md bg-gray-500" disabled>
          Prev
        </button>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-4 py-2 rounded-md ${
            number === currentPage
              ? "bg-gray-800 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages ? (
        <button
          className="px-4 py-2 rounded-md bg-gray-300"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      ) : (
        <button className="px-4 py-2 rounded-md bg-gray-500" disabled>
          Next
        </button>
      )}
    </div>
  );
};

export default StorePagination;
