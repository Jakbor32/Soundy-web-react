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
        className={`scrollbar-none fixed left-0 top-0 z-40  h-screen w-48 overflow-y-auto bg-slate-950 pt-5 shadow-lg transition-transform duration-500 ${
          open ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        <div
          open={open}
          className="fixed left-0 top-0 z-40 h-screen min-h-[32rem] w-48 bg-slate-950 pt-3 shadow-lg"
        >
          <div
            onClick={closeSidebar}
            className="m-3 flex w-max cursor-pointer items-center rounded-full bg-slate-700 px-3 py-1 font-light hover:bg-slate-800"
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
                  href={`${link.id}`}
                  className="block px-6 py-4 font-bold text-gray-300"
                >
                  {link.val}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-0 flex w-full justify-center px-3 py-10 ">
            <img src={logo[0].path} alt={logo[0].desc} />
          </div>
          <div className="absolute bottom-0 flex w-full justify-center gap-4 px-2 py-2 opacity-50 ">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
          <div className="absolute right-0 top-0 px-3 py-3 ">
            <a href={links.github.url}>{links.github.icon}</a>
          </div>
        </div>
      </aside>
      <div
        onClick={closeSidebar}
        className="fixed left-0 top-0 h-screen w-screen bg-black opacity-80"
      ></div>
    </>
  );
};

export default Sidebar;
