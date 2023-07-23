import { useState, useEffect } from "react";
import { navLinks, logo, icons, navTexts } from "../lib/Constants";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Body overflow control
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <nav
      className={`${
        scrolled
          ? "fixed top-0 w-full  bg-opacity-80 bg-featuredBgClr  backdrop-filter backdrop-blur-sm animate-slide-down border-b border-b-gray-700 z-10"
          : "absolute top-0 w-full z-10"
      } px-4 py-1.5 md:px-6 text-white`}
    >
      <div className="mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between max-w-8xl">
        <div className="flex flex-row gap-3">
          <button onClick={handleMenuOpen} className="md:hidden">
            {icons[3].bars}
          </button>
          <a href="#" className="flex items-center">
            <img
              src={logo[0].path}
              className="mr-3 h-8 md:h-10 hidden min-[320px]:block"
              alt={logo[0].desc}
            />
          </a>
        </div>
        <div className="flex flex-row md:order-2 items-center gap-3">
          <div className="text-xl md:text-2xl">
            <a href="">{icons[2].shoppingCart}</a>
          </div>
          <button className="flex items-center border border-white">
            <div className="pl-3">{icons[1].lock}</div>
            <a
              href="#"
              className="mr-2 pl-1 pr-2 py-2 text-[0.65rem] md:text-xs font-bold tracking-wider"
            >
              {navTexts.login}
            </a>
          </button>
        </div>
        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <ul className="mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:gap-7 ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="py-2 hover:text-hvrNavClr"
                  aria-current="page"
                >
                  {link.val}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {open && <Sidebar open={open} setOpen={setOpen} />}
    </nav>
  );
};

export default Navbar;
