import React from "react";
import {
  logo,
  socialLinks,
  concertMessage,
  newsletterText,
  newsletterInputPlaceholder,
  submitButtonLabel,
  copyrightText,
  newsletterTitle,
  footerLinks,
  linksTitle,
} from "../lib/Constants";

const Footer = () => {
  return (
    <footer className="bg-featuredFooterBg py-10 text-zinc-500">
      <div className="container mx-auto px-4 lg:px-20 ">
        <div className="flex flex-col-reverse items-center  justify-between gap-5 pt-10 lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-5 lg:items-start">
            <img src={logo[0].path} className="h-16" alt={logo[0].desc} />
            <p className="pl-3 text-center text-base leading-7 lg:max-w-xs lg:text-left">
              {concertMessage}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <h4 className="-ml-2.5 mb-3 border-l-4 border-redBarClr pl-2 pt-2 text-[1.125rem] text-zinc-100">
              {linksTitle}
            </h4>
            {footerLinks.map((link) => (
              <a key={link.id} href={link.url}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex max-w-full flex-col items-center gap-7 lg:pr-3">
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="-ml-2.5 mb-3 border-l-4 border-redBarClr pl-2 pt-2 text-[1.125rem] text-zinc-100">
                {newsletterTitle}
              </h4>
              <p className="py-5 text-center lg:max-w-[15rem] lg:text-left">
                {newsletterText}
              </p>
            </div>
            <div class="w-full lg:w-[24rem] lg:px-0 xl:w-[32rem]">
              <div class="relative flex flex-col items-center gap-5 sm:flex-row sm:gap-0">
                <input
                  id="8"
                  type="text"
                  placeholder={newsletterInputPlaceholder}
                  class="relative h-14 w-full border-2 border-zinc-500  bg-featuredFooterBg pl-3 pr-36 font-thin outline-none "
                />
                <button class="relative h-12 w-32 border-zinc-500 bg-footerBtnClr text-2xl font-bold  uppercase text-white sm:absolute sm:right-1 sm:border-l-2">
                  {submitButtonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr class="mx-3 my-8 h-px border-0 bg-zinc-700" />
        <div className="flex flex-col items-center justify-between gap-4 px-3 sm:flex-row sm:gap-0">
          {copyrightText}
          <div className="flex justify-center gap-4 opacity-50 ">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
