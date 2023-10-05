import React from "react";
import { tickets } from "../../lib/Constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="container mx-auto mt-32 x-0 lg:px-20">
      <VerticalTimeline>
        {tickets.map((ticket) => (
          <VerticalTimelineElement
            contentStyle={{
              background: "#0D0B0B",
              color: "#fff",
              boxShadow: ".2rem .5rem .3rem #000",
            }}
            contentArrowStyle={{ borderRight: "10px solid #0D0B0B" }}
            iconStyle={{
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              lineHeight: "1rem",
              fontFamily: "saira stencil one, sans-serif",
              textAlign: "center",
            }}
            icon={ticket.date}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm text-yellow-600 md:text-2xl">
                  {ticket.eventName}
                </h3>
                <h4 className="text-xs md:text-base">{ticket.subtitle}</h4>
              </div>
              <div className="flex gap-3">
                <a
                  href={ticket.linkInfo}
                  className="px-3 py-1 uppercase border-2 md:py-2 md:px-4"
                >
                  Info
                </a>
                <a
                  href={ticket.linkBuy}
                  className="px-3 py-1 uppercase border-2 md:py-2 md:px-4"
                >
                  Tickets
                </a>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
