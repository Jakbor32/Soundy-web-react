import React from "react";
import { logo, socialLinks } from "../lib/Constants";

const Footer = () => {
  return (
    <footer className="bg-featuredFooterBg py-10 text-zinc-500">
      <div className="container mx-auto px-20 ">
        <div className="flex flex-row  items-center justify-between pt-10 ">
          <div className="flex flex-col items-start gap-5">
            <img src={logo[0].path} className="h-16" alt={logo[0].desc} />
            <p className="max-w-xs pl-3 text-left text-base leading-7">
              Playing on stage, we feel how the energy connects us with the
              audience, we create a powerful bond, see you at the concerts!
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h4 className="-ml-2.5 mb-3 border-l-4 border-redBarClr pl-2 pt-2 text-[1.125rem] text-zinc-100">
              Links
            </h4>
            <a href="#">News</a>
            <a href="#">Music</a>
            <a href="#">Tour</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </div>
          <div className="max-w flex flex-col items-center gap-7 pr-3">
            <div className="flex flex-col items-start">
              <h4 className="-ml-2.5 mb-3 border-l-4 border-redBarClr pl-2 pt-2 text-[1.125rem] text-zinc-100">
                Join our newsletter
              </h4>
              <p className="max-w-[15rem] py-5">
                Stay up to date with our newsletter - subscribe now!
              </p>
            </div>
            <div class="w-[32rem]">
              <div class="relative flex items-center">
                <input
                  id="8"
                  type="text"
                  placeholder="Enter your email address..."
                  class="relative h-14 w-full border-2 border-zinc-500  bg-featuredFooterBg pl-3 pr-36 font-thin outline-none"
                />
                <button class="absolute right-1 h-12 w-32 border-l-2 border-zinc-500  bg-footerBtnClr text-2xl font-bold uppercase text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr class="mx-3 my-8 h-px border-0 bg-zinc-700" />
        <div className="flex flex-row items-center justify-between px-3 ">
          <p className="font-light">
            &copy; 2023 Borowy Jakub. All rights reserved.
          </p>
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
