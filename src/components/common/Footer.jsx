import React from "react";
import {
  logo,
  socialLinks,
  concertMessage,
  newsletterText,
  copyrightText,
  newsletterTitle,
  footerLinks,
  linksTitle,
} from "../../lib/Constants";
import SubscriptionMailer from "../contactform/SubscriptionMailer";

const Footer = () => {
  return (
    <footer className="py-10 bg-featuredFooterBg text-zinc-400">
      <div className="container px-4 mx-auto lg:px-20 ">
        <div className="flex flex-col-reverse items-center justify-between gap-5 pt-10 lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-5 lg:items-start">
            <img src={logo[0].path} className="h-16" alt={logo[0].desc} />
            <p className="pl-3 text-base leading-7 text-center lg:max-w-xs lg:text-left">
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
          <div className="flex flex-col items-center max-w-full gap-7 lg:pr-3" id="newsletter">
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="-ml-2.5 mb-3 border-l-4 border-redBarClr pl-2 pt-2 text-[1.125rem] text-zinc-100">
                {newsletterTitle}
              </h4>
              <p className="py-5 text-center lg:max-w-[15rem] lg:text-left">
                {newsletterText}
              </p>
            </div>
             <SubscriptionMailer />
          </div>
        </div>
        <hr className="mx-3 my-8 h-px border-0 bg-zinc-700" />
        <div className="flex flex-col items-center justify-between gap-4 px-3 sm:flex-row sm:gap-0">
          {copyrightText}
          <div className="flex justify-center gap-4 opacity-80 ">
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
