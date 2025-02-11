import React, { useState, useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { IoLogoAmplify } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback((state) => setIsMobileMenuOpen(state), []);

  return (
    <header className="sticky top-0 w-full h-20 flex items-center z-30 border-b border-neutral-900">
      <div className="absolute inset-0 backdrop-blur-md"></div>
      <div className="relative max-w-screen-2xl w-full mx-auto flex justify-between items-center px-8 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <IoLogoAmplify className="text-4xl" />
        </Link>

        {/* Desktop Menü */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className={`relative transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-neutral-200 after:duration-300 ${
                location.pathname === item.url
                  ? "text-white after:w-full"
                  : "hover:text-white after:w-0 hover:after:w-full"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobil Menü Butonu */}
        <button className="md:hidden text-4xl" onClick={() => toggleMenu(true)}>
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobil Menü Bileşeni */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;