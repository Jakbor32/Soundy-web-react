import React from "react";

const TicketModal = ({ children }) => {
  return (
    <div className="bg-black w-[40rem] py-5 mb-3">
      {children}
    </div>
  );
};

export default TicketModal;
