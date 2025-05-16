import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logoImg from "../assets/images/logo.jpg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logoImg}
            alt="Royal"
            className="h-24 w-auto object-contain"
          />
          <div className="text-sm leading-tight hidden sm:block">
            <p className="text-gray-800 font-semibold">Havilah Royal</p>
            <p className="text-gray-800 font-semibold">Community Church</p>
            <hr className="my-1 border-gray-400" />
            <p className="text-gray-800 font-semibold">The Royal Chapel</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-bold tracking-widest text-black uppercase">
          <li className="hover:text-amber-400 cursor-pointer">Home</li>
          <li className="hover:text-amber-400 cursor-pointer">About Us</li>
          <li className="hover:text-amber-400 cursor-pointer">Media</li>
          <li className="hover:text-[#740798] cursor-pointer">Ministries</li>
          <li className="hover:text-amber-400 cursor-pointer">Contact Us</li>
         
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-4 text-sm font-bold tracking-widest text-black uppercase">
          <li className="hover:text-amber-400 cursor-pointer">Home</li>
          <li className="hover:text-amber-400 cursor-pointer">About Us</li>
          <li className="hover:text-amber-400 cursor-pointer">Media</li>
          <li className="hover:text-amber-400 cursor-pointer">Ministries</li>
          <li className="hover:text-amber-400 cursor-pointer">Contact Us</li>
         
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
