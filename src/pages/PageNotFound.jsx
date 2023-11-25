import React from "react";
import Button from "../components/common/Button";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-950 text-white h-screen">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 font-saira-stencil-one flex items-center justify-center gap-5">
        <span className="animate-fadeInUp delay-300">4</span>
          <span className="animate-fadeInUp delay-500">0</span>
          <span className="animate-fadeInUp delay-700">4</span>
        </h1>
        <p className="text-lg mb-8">Page Not Found</p>
        <p className="text-gray-300">
          The page you are looking for might be unavailable or does not exist.
        </p>
          <div className="mt-10">
          <Button to="">Go Home</Button>
          </div>
      </div>
    </div>
  );
};

export default PageNotFound;
