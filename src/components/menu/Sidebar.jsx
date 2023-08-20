import { useEffect, useRef } from "react";

import {
  navLinks,
  socialLinks,
  links,
  navTexts,
  icons,
} from "../../lib/Constants";

const Sidebar = ({ open, setOpen }) => {
  const sidebarRef = useRef(null);

  // Close the sidebar with animate
  const closeSidebar = () => {
    sidebarRef.current.classList.add("animate-slide-out-right");
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
        className={`fixed left-0 top-0 z-40 h-screen w-48 overflow-y-auto bg-slate-950 pt-5 shadow-lg transition-transform duration-500 ${
          open ? "animate-slide-in-right" : "animate-slide-out-right"
        }`}
      >
        <div
          open={open}
          className="fixed top-0 left-0 z-40 w-48 h-full pt-3 shadow-lg"
        >
          <div
            onClick={closeSidebar}
            className="flex items-center px-3 py-1 m-3 font-light rounded-full cursor-pointer w-max bg-slate-700 hover:bg-slate-800"
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
          <div className="flex justify-center w-full gap-4 px-2 my-10 opacity-50">
            {socialLinks.map((link) => (
              <a key={link.id} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
          <div className="absolute top-0 right-0 px-3 py-3 ">
            <a href={links.github.url}>{links.github.icon}</a>
          </div>
        </div>
      </aside>
      <div
        onClick={closeSidebar}
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-80"
      ></div>
    </>
  );
};

export default Sidebar;
