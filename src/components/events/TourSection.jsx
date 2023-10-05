import React from "react";
import Button from "../common/Button";
import Ticket from "./Ticket";
import ticketsBg from "../../assets/tickets-bg.webp";
import { tickets, TourSectionTitle } from "../../lib/Constants";

const TourSection = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${ticketsBg})`,
    backgroundSize: "cover",
  };

  return (
    <section
      className="flex-wrap items-center justify-center gap-6 px-5 py-5 mx-auto text-white bg-white containerflex lg:px-20 lg:justify-between"
      style={sectionStyle}
    >
      <div className="flex flex-col items-center gap-8 py-10 mx-auto">
        <h2 className="text-3xl text-center text-white uppercase md:text-4xl font-epilogue">
          {TourSectionTitle}
        </h2>
        <div className="w-48 h-1 bg-redBarClr"></div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-6">
        {tickets.slice(0, 4).map((ticket, index) => (
          <Ticket
            key={index}
            ticketDate={ticket.date}
            ticketSubtitle={ticket.subtitle}
            ticketEventName={ticket.eventName}
            ticketLinkBuy={ticket.linkBuy}
            ticketLinkInfo={ticket.linkInfo}
          />
        ))}
      </div>
      <div className="flex justify-center w-full pt-6 tracking-widest uppercase lg:pt-8">
        <Button to="tour">More Tickets</Button>
       
      </div>
    </section>
  );
};

export default TourSection;
