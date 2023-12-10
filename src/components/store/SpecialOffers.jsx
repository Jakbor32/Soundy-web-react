import React, { useEffect } from "react";
import { specialOffers } from "../../lib/Constants";
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from "react-icons/ai";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SpecialOffers = () => {
  const notify = (index) => {
    toast(<ToastWithLink index={index} />, {
      duration: 3000,
      position: "bottom-right",
      style: {
        background: "#363636",
        color: "#fff",
        fontSize: ".7rem",
      },
    });
  };

  const ToastWithLink = ({ index }) => (
    <div>
      <p>Song: {specialOffers[index].songName}</p>
      <p>{specialOffers[index].desc}</p>
      <p>
        <Link to={specialOffers[index].linkNCS}>
          Free Download/Stream:{" "}
          <i className="text-blue-300 hover:text-blue-500">
            {specialOffers[index].linkNCS}
          </i>
        </Link>
      </p>
    </div>
  );

  // Toast Limiter
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <section>
      <div className=" bg-stone-950 px-0 sm:px-5 mx-auto py-4 flex gap-5">
        <Splide
          aria-label="News"
          options={{
            type: "loop",
            autoplay: true,
            perPage: 5,
            drag: true,
            height: "100%",
            width: "100%",
            perMove: 1,
            padding: "4rem",
            arrows: false,
            gap: "2rem",
            pagination: false,
            rewind: true,
            breakpoints: {
              450: {
                perPage: 1,
              },
              820: {
                perPage: 2,
              },
              1280: {
                perPage: 3,
              },
            },
          }}
        >
          {specialOffers.map((item, index) => (
            <SplideSlide>
              <div key={item.src} className="relative">
                <div className="absolute top-1 right-0 z-10 cursor-pointer">
                  <AiOutlineInfoCircle
                    size={32}
                    onClick={() => notify(index)}
                  />
                </div>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="scale-105 w-full z-20"
                />
                <div className="flex items-center justify-between top-5 relative gap-2">
                  <div className="text-white text-2xl">{item.price}</div>
                  <div className="flex justify-end gap-3 items-center">
                    <button className="relative bg-stone-600 font-bold py-2 px-5 text-white opacity-40 cursor-not-allowed" disabled>
                      Sold-out
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-10"></div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <Toaster />
    </section>
  );
};

export default SpecialOffers;
