import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [placeholderTimeout, setPlaceholderTimeout] = useState(null);


  // Add white-space delay
  const placeholderSuggestions = [
    "Guitar  ",
    "Soundy cup  ",
    "Blouse  ", 
    "Music CD  ",
    "Music souvenirs  ",
    "Classical guitar  ",
    "Electric guitar  ",
    "Soundy hat  ",
  ];

  useEffect(() => {
    let currentLetterIndex = 0;
    let animationInterval;
    let reverse = false;

    // Type letters
    const animatePlaceholder = () => {
      const currentPlaceholder = placeholderSuggestions[placeholderIndex];
      if (currentLetterIndex < currentPlaceholder.length && !reverse) {
        setAnimatedPlaceholder(
          currentPlaceholder.slice(0, currentLetterIndex + 1)
        );
        currentLetterIndex++;
      } else if (reverse) {
        if (currentLetterIndex > 0) {
          setAnimatedPlaceholder(
            currentPlaceholder.slice(0, currentLetterIndex - 1)
          );
          currentLetterIndex--;
        } else {
          reverse = false;
          currentLetterIndex = 0;
          clearInterval(animationInterval);

          // Set a timeout to switch to the next placeholder
          setPlaceholderTimeout(
            setTimeout(() => {
              setPlaceholderIndex((prevIndex) =>
                (prevIndex + 1) % placeholderSuggestions.length
              );
            }, 300) 
          );
        }
      } else {
        reverse = true;
      }
    };

    // 100ms between each letter
    animationInterval = setInterval(animatePlaceholder, 100); 

    return () => {
      clearInterval(animationInterval);
      clearTimeout(placeholderTimeout);
    };
  }, [placeholderIndex]);

  return (
    <div className="text-gray-600 container px-2 sm:px-20 py-10 mx-auto md:block">
      <div className="relative">
        <input
          className="bg-rose-950 text-sm w-full p-4 text-white focus:outline-none pl-16 rounded-xl shadow-md shadow-black"
          type="search"
          name="search"
          placeholder={animatedPlaceholder}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button type="submit" className="absolute left-2 top-1 p-[.15rem]">
          <AiOutlineSearch color="white" size={40} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
