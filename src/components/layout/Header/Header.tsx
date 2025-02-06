import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`bg-white text-white border-b sticky top-0 duration-500`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="w-24 bg-transparent">
          <img src={Logo} alt="Logo" className="size-full bg-transparent" />
        </Link>

        <div className="flex items-center justify-end lg:justify-center space-x-6">
          <button
            className="lg:hidden h-12 w-12 flex items-center justify-center rounded-full hover:text-orange-600 text-black duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <RxHamburgerMenu className="text-4xl text-center" />
          </button>
        </div>
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
