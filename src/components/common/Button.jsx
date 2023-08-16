import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, border = true }) => {
  const buttonStyle = border
    ? "text-xl text-white opacity-70 bg-transparent border-2 border-white py-3 px-6 ease-out duration-300 hover:opacity-100"
    : "text-xl text-white opacity-70 bg-transparent py-3 px-6 ease-out duration-300 hover:opacity-100";

    
 // Scroll to Element
  const handleScrollToElement = () => {
    const element = document.getElementById(`${to.slice(1)}`);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {
    if (to.includes("#")) {
      handleScrollToElement(); 
    }
  };

  return (
    <Link to={`/${to}`}  className={buttonStyle} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default Button;