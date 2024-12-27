import React, { useState } from "react";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { title: "Github", icon: <FaGithub />, to: "https://github.com/hakankygsz" },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    to: "https://www.instagram.com/hakankygsz/",
  },
  {
    title: "Discord",
    icon: <FaDiscord />,
    to: "https://discord.gg/b5qkNg7ncK",
  },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <header className="flex items-center justify-between py-8 md:py-12 px-6 md:px-20 lg:px-36">
      <div className="flex flex-shrink-0 items-center gap-2">
        <h2 className="text-4xl text-gray-100 font-cookie">Hakan K.</h2>
      </div>

      <ul className="hidden md:flex items-center justify-center gap-8 text-lg">
        {links.map((link, index) => (
          <li key={index} className="relative">
            <button
              onClick={() => (window.location.href = link.to)}
              className="text-3xl text-gray-200 p-2 rounded-lg hover:ring-2 hover:ring-violet-500 transition-all"
            >
              {link.icon}
            </button>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-4xl text-white hover:text-violet-500 transition-colors"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform duration-500 bg-black bg-opacity-80 backdrop-blur-sm ${
          mobileMenu
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <div className={`fixed inset-0`} onClick={toggleMobileMenu} />
        <div
          className={`fixed right-0 w-3/4 max-w-xs h-full bg-black bg-opacity-60 text-white border-l border-neutral-950 p-6 transform ${
            mobileMenu ? "translate-x-0" : "translate-x-full"
          } transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
          <ul className="flex flex-col gap-6 mt-10">
            {links.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => (window.location.href = link.to)}
                  className="text-xl text-gray-200 font-medium hover:text-violet-400 transition-colors"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
