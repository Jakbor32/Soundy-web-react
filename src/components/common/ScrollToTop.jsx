import React, { useState, useEffect, useCallback, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimer = useRef(null);

  //  Handle page scroll
  const handleScroll = useCallback(() => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }

    clearTimeout(idleTimer.current);
    setIsIdle(false);

    // Set timer after 5 seconds of inactivity
    idleTimer.current = setTimeout(() => {
      setIsIdle(true);
    }, 5000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-all duration-300 z-50 ${
        showButton && !isIdle
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full"
      }`}
    >
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 transform hover:scale-110 transition-transform"
        onClick={scrollTop}
      >
        <AiOutlineArrowUp size={24} />
      </button>
    </div>
  );
};

export default ScrollToTop;