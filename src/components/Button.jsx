import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Button = ({ to, children, border = true }) => {
  const buttonStyle = border
    ? "text-xl text-white opacity-70 bg-transparent border-2 border-white py-3 px-6 ease-out duration-300 hover:opacity-100"
    : "text-xl text-white opacity-70 bg-transparent py-3 px-6 ease-out duration-300 hover:opacity-100";

  return (
    <Router>
      <Link to={to} className={buttonStyle}>
        {children}
      </Link>
    </Router>
  );
};

export default Button;
