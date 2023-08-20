import React from "react";

const StepIndicator = ({ currentStepCart }) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-96">
      <div className="w-4/5 h-1 ml-3 bg-white sm:mr-3 sm:block sm:w-80"></div>
      <div className="relative flex justify-between w-full px-1 bottom-4">
        <StepIcon
          stepNumber={1}
          label="Cart"
          isActive={currentStepCart === 0}
        />
        <StepIcon
          stepNumber={2}
          label="Address"
          isActive={currentStepCart === 1}
        />
        <StepIcon
          stepNumber={3}
          label="Payment"
          isActive={currentStepCart === 2}
        />
      </div>
    </div>
  );
};

const StepIcon = ({ stepNumber, label, isActive }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`grid w-6 h-6 sm:w-8 sm:h-8 text-sm sm:text-xl font-bold rounded-full place-content-center px-6 ${
          isActive
            ? "bg-slate-950 border-2 text-white"
            : " bg-white text-slate-700"
        }`}
      >
        {stepNumber}
      </div>
      <div className="text-sm sm:text-base">{label}</div>
    </div>
  );
};

export default StepIndicator;
