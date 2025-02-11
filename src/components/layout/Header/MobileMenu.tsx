import React, { useCallback, useMemo } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Anasayfa",
    url: "/"
  },
  {
    name: "Projeler",
    url: "/projects"
  },
  {
    name: "İletişim",
    url: "/contact"
  },
];

const MobileMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: (state: boolean) => void }) => {
  return (
    <div className={`md:hidden fixed inset-0 z-30 duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md" onClick={() => toggleMenu(false)}></div>

      <div className="fixed right-0 top-0 w-3/4 h-full bg-black bg-opacity-90 border-l border-neutral-900 z-50">
        <div className="h-20 flex items-center justify-end px-4 border-b border-neutral-900">
          <button className="text-gray-100 text-5xl" onClick={() => toggleMenu(false)}>
            <IoCloseOutline />
          </button>
        </div>

        <nav className="flex flex-col space-y-8 px-8 py-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.url} className={`relative text-xl duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-neutral-200 after:duration-300 ${
              location.pathname === item.url
                ? "text-white after:w-20"
                : "hover:text-white after:w-0 hover:after:w-full"
            }`}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
