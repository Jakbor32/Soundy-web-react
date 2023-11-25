import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  newsletterInputPlaceholder,
  submitButtonLabel,
} from "../../lib/Constants";

const SubscriptionMailer = () => {
  const [email, setEmail] = useState("");

  const notifyGood = () => {
    toast("Thank you for subscribing to our newsletter!", {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#006400",
        color: "#fff",
        fontSize: ".7rem",
      },
    });
  };

  const notifyBad = () => {
    toast("Failed to subscribe to the newsletter", {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#8B0000",
        color: "#fff",
        fontSize: ".7rem",
      },
    });
  };

  // EmailJS

  const subscriptionSend = (e) => {
    e.preventDefault();
    let templateParams = {
      email: email,
    };
    emailjs
      .send(
        "service_g9g3o0j",
        "template_zifbzgh",
        templateParams,
        "xm768EdEMyzz9n9xF"
      )
      .then(
        () => {
          setEmail("");
          notifyGood();
        },
        () => {
          notifyBad();
        }
      );
  };

  return (
    <div className="w-full lg:w-[24rem] lg:px-0 xl:w-[32rem]">
      <form onSubmit={subscriptionSend}>
        <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:gap-0">
          <input
            type="email"
            name={email}
            id={email}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
            placeholder={newsletterInputPlaceholder}
            className="relative w-full pl-3 pr-3 font-thin border-2 outline-none h-14 border-zinc-500 bg-featuredFooterBg"
          />
          <button
            type="submit"
            className="relative w-32 h-12 text-2xl font-bold text-white uppercase border-zinc-500 bg-footerBtnClr sm:absolute sm:right-1 sm:border-l-2"
          >
            {submitButtonLabel}
          </button>
       
        </div>
      </form>
    </div>
  );
};

export default SubscriptionMailer;
