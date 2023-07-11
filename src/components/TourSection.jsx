import React from "react";
import Button from "./Button";
import Ticket from "./Ticket";
import { tickets,TourSectionTitle } from "../lib/Constants";

const TourSection = () => {
  return (
    <section className="container flex flex-row flex-wrap items-center justify-center gap-6 px-5 py-5 mx-auto text-white lg:px-20 lg:justify-between">
 <div className="flex flex-col items-center gap-8 py-10 mx-auto">
        <h2 className="text-5xl text-center uppercase font-epilogue">
        {TourSectionTitle}
        </h2>
        <div className="w-48 h-1 bg-redBarClr"></div>
      </div>
      <div className="relative flex flex-col w-full gap-5"> 
      {tickets.map((ticket, index) => (
          <Ticket
            key={index}
            ticketDate={ticket.date}
            ticketLocation={ticket.location}
            ticketEventName={ticket.eventName}
            ticketLink={ticket.link}
          />
        ))}
      </div>
      <div className="flex justify-center w-full pt-8 tracking-widest uppercase lg:pt-16">
        <Button>Go to concert tours</Button>
      </div>
      </section>

  )
}

export default TourSection