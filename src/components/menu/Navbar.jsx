import { useState, useEffect } from "react";
import { navLinks, logo, icons } from "../../lib/Constants";
import Sidebar from "./Sidebar";
import Cart from "../cart/Cart";
import { useCartContext } from "../cart/CartContext";
import LoginButton from "../auth/Login";
import LogoutButton from "../auth/Logout";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useCartContext();

  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleOpenCart = () => {
    setOpenCart(true);
  };

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrolled(false);
      } else {
        if (prevScrollPos - currentScrollPos >= 15) {
          setScrolled(true);
        }
      }
      if (prevScrollPos < 100) {
        setScrolled(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, setScrolled]);

  // Body overflow control + add scroll width
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (open || openCart) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0";
    };
  }, [open, openCart]);

  return (
    <nav
      className={`${
        scrolled
          ? "fixed top-0 z-10 w-full animate-slide-down  bg-black bg-opacity-40 backdrop-blur-sm backdrop-filter"
          : prevScrollPos < 1
          ? "absolute animate-slide-down w-full z-10 top-0"
          : "fixed top-0 z-10 w-full animate-slide-up  bg-black bg-opacity-40 backdrop-blur-sm backdrop-filter"
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
              {cartItems.length > 0 && (
                <div className="absolute grid w-5 h-5 text-sm bg-red-800 rounded-full right-3 sm:right-4 bottom-2 place-content-center">
                  {cartItems.length}
                </div>
              )}
              {icons[2].shoppingCart}
            </div>
          </div>
          <LoginButton />
          <LogoutButton />
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
