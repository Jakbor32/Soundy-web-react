import React from "react";

const Ticket = (props) => {

  return (
    <div className="flex flex-row flex-wrap items-center justify-center w-full gap-6 px-5 py-5 lg:justify-between md:px-20 lg:gap-0 bg-bgTicketClr">
      <div className="flex items-center gap-16 uppercase">
        <time className="text-xl lg:text-3xl font-saira-stencil-one" dateTime="2023-12-10">{props.ticketDate}</time>
        <p className="text-sm font-light lg:text-xl">{props.ticketLocation}</p>
      </div>
      <div className="flex items-center gap-16 font-light uppercase">
        <p className="text-sm lg:text-xl">{props.ticketEventName}</p>
        <a className="text-2xl lg:text-4xl font-oregano" href={props.ticketLink}>BUY</a>
      </div>
    </div>
  );
}

export default Ticket;