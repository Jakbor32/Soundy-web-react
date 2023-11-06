import React from "react";

const StorePagination = () => {
  return (
    <div className="flex justify-center space-x-4 mt-10">
      <button className="px-4 py-2 rounded-md bg-gray-300">
        Prev
      </button>
      <button className="px-4 py-2 rounded-md bg-gray-800 text-white">
        1
      </button>
      <button className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400">
        2
      </button>
      <button className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400">
        3
      </button>
      <button className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400">
        4
      </button>
      <button className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400">
        Next
      </button>
    </div>
  );
};

export default StorePagination;
