import { useEffect, useRef } from "react";

import {
  navLinks,
  socialLinks,
  links,
  navTexts,
  icons,
  logo,
} from "../lib/Constants";

const Sidebar = ({ open, setOpen }) => {
  const sidebarRef = useRef(null);

  // Close the sidebar with animate
  const closeSidebar = () => {
    sidebarRef.current.classList.add("animate-slide-out");
    setTimeout(() => {
      setOpen(false);
    }, 250);
  };

  // Close the sidebar when width > 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);
  return (
    <>
      <aside
        ref={sidebarRef}
        className={`pt-5 fixed top-0 left-0 h-screen w-48 bg-slate-950 shadow-lg z-40 transition-transform duration-500 ${
          open ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        <div
          open={open}
          className="pt-5 fixed top-0 left-0 h-screen w-48 bg-slate-950 shadow-lg z-40"
        >
          <div
            onClick={closeSidebar}
            className="m-3 px-3 py-1 flex items-center w-max bg-slate-700 hover:bg-slate-800 rounded-full font-light cursor-pointer"
          >
            {icons[0].doubleLeftArrow}
            <button>{navTexts.closeMenu}</button>
          </div>
          <ul className="pt-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="border-b border-slate-600 hover:bg-slate-900"
              >
                <a
                  href={`#${link.id}`}
                  className="px-6 py-4 block text-gray-300 font-bold"
                >
                  {link.val}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-3 py-10 absolute bottom-0 w-full flex justify-center ">
            <img src={logo[0].path} alt={logo[0].desc} />
          </div>
          <div className="px-2 py-2 w-full flex justify-center absolute bottom-0 gap-4 opacity-50 ">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
          <div className="px-3 py-3 absolute top-0 right-0 ">
            <a href={links[0].url}>{links[0].icon}</a>
          </div>
        </div>
      </aside>
      <div
        onClick={closeSidebar}
        className="fixed top-0 left-0 bg-black w-screen h-screen opacity-80"
      ></div>
    </>
  );
};

export default Sidebar;
