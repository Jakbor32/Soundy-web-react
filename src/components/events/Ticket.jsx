import React from "react";

const Ticket = (props) => {
  return (
    <div className="container px-5 lg:px-20">
        <div className="flex flex-col items-start justify-start gap-5 md:items-center md:justify-between md:flex-row md:gap-0">
          <div className="flex items-center gap-5">
            <div className="flex items-center w-20 h-20 p-5 text-center border-2 rounded-full md:w-24 md:h-24">
              <time className="text-sm leading-4 md:leading-5 md:text-xl font-saira-stencil-one">
                {props.ticketDate}
              </time>
            </div>
            <div className="flex flex-col uppercase">
              <p className="text-sm text-yellow-600 md:text-2xl">
                {props.ticketEventName}
              </p>
              <p className="text-xs md:text-base">{props.ticketSubtitle}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <a href={props.ticketLinkInfo} className="px-3 py-1 uppercase border-2 md:py-2 md:px-4">
              Info
            </a>
            <a  href={props.ticketLinkBuy} className="px-3 py-1 uppercase border-2 md:py-2 md:px-4">
              Tickets
            </a>
          </div>
      </div>
      <hr className="h-px mt-10 border-0 bg-stone-700" />
    </div>
  );
};

export default Ticket;
