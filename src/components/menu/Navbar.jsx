import { useState, useEffect } from "react";
import { navLinks, logo, icons, navTexts } from "../../lib/Constants";
import Sidebar from "./Sidebar";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleOpenCart = () => {
    setOpenCart(true);
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
    if (open || openCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open,openCart]);

  return (
    <nav
      className={`${
        scrolled
          ? "fixed top-0 z-10  w-full animate-slide-down  border-b border-b-gray-700 bg-black bg-opacity-40 backdrop-blur-sm backdrop-filter"
          : "absolute top-0 z-10 w-full"
      } px-4 py-1.5 text-white md:px-6`}
    >
      <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between px-4 py-1.5">
        <div className="flex flex-row gap-3">
          <button onClick={handleMenuOpen} className="md:hidden">
            {icons[3].bars}
          </button>
          <a href="#" className="flex items-center">
            <img
              src={logo[0].path}
              className="mr-3 hidden h-8 min-[320px]:block md:h-10"
              alt={logo[0].desc}
            />
          </a>
        </div>
        <div className="flex flex-row items-center gap-3 md:order-2">
          <div className="text-xl md:text-2xl">
            <div className="relative cursor-pointer" onClick={handleOpenCart}>
              <div className="absolute grid w-4 h-4 text-sm bg-red-800 rounded-full sm:h-5 sm:w-5 right-3 bottom-3 place-content-center">5</div>
            {icons[2].shoppingCart}
            </div>
          </div>
          <button className="flex items-center border border-white">
            <div className="pl-3">{icons[1].lock}</div>
            <a
              href="#"
              className="mr-2 py-2 pl-1 pr-2 text-[0.65rem] font-bold tracking-wider md:text-xs"
            >
              {navTexts.login}
            </a>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:order-1 md:flex md:w-auto">
          <ul className="flex flex-col mt-4 font-medium md:mt-0 md:flex-row md:gap-7 ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`${link.id}`}
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
      {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
      
    </nav>
  );
};

export default Navbar;
