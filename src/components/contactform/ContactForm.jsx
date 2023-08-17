import React from "react";
import contactFormBg from "../../assets/contact-form-bg.jpg";
import {
  contactInfo,
  contactFormSubtitle,
  contactFormTitle,
} from "../../lib/Constants";
import { EmailService } from "./EmailService";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="relative px-5 py-10 overflow-hidden lg:px-0"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          className="object-cover w-full h-full opacity-10"
          src={contactFormBg}
          alt="Dark background"
        />
      </div>
      <div className="container relative w-full py-3 mx-auto text-white lg:px-20 xl:py-0">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-light xl:text-5xl sm:text-4xl">
              {contactFormTitle}
            </h2>
            <EmailService />
          </div>
          <div className="hidden w-1 mx-16 bg-white lg:block h-96 opacity-20"></div>
          <div className="flex flex-col items-center pt-10 sm:items-start lg:pt-0">
            <h3 className=" text-md xl:text-2xl sm:text-xl">
              {contactFormSubtitle}
            </h3>
            <div className="w-48 h-1 mt-5 mb-10 bg-redBarClr"></div>
            <div className="flex flex-col gap-4 text-xs xl:text-lg sm:text-sm">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 ">
                  {info.icon}
                  <p className="w-48 sm:w-72">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
