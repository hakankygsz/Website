import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUser, FaQuestion } from "react-icons/fa6";
import { RiCoupon2Line } from "react-icons/ri";
import { LuPackage } from "react-icons/lu";
import { CiSearch } from 'react-icons/ci';
import { IoIosHelpCircleOutline, IoIosInformationCircleOutline  } from "react-icons/io";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} duration-300 transition-all`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div className={`fixed top-0 right-0 w-3/4 h-full bg-white z-40 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} duration-300 transition-all`}>
        <div className="w-full h-20 border-b flex items-center justify-between px-6">
          <button
            className="h-12 w-12 flex items-center justify-center rounded-full hover:ring-2 text-neutral-800 ring-neutral-700 duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IoCloseOutline className="text-5xl" />
          </button>
        </div>

        <nav>
            <ul className='flex flex-col space-y-2 py-4'>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
