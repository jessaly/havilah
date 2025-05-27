import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "../assets/images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowContactDropdown(false);
  };

  const toggleContactDropdown = () => {
    setShowContactDropdown((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowContactDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Media", href: "/media" },
    { label: "Ministries", href: "/ministries" },
  ];

  const contactLinks = [
    { label: "Inquiry / Feedback", href: "/feed" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl px-6 py-4 backdrop-blur-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2"
          aria-label="Go to homepage"
        >
          <img
            src={logoImg}
            alt="Royal Chapel Logo"
            className="h-20 w-auto object-contain"
          />
          <div className="text-sm leading-tight hidden sm:block">
            <p className="text-gray-800 font-semibold">Havilah Royal</p>
            <p className="text-gray-800 font-semibold">Community Church</p>
            <hr className="my-1 border-gray-400" />
            <p className="text-gray-800 font-semibold">The Royal Chapel</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-bold tracking-widest text-black uppercase items-center relative">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-amber-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* CONTACT US Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleContactDropdown}
              className="flex items-center gap-1 hover:text-amber-500 transition-colors"
              aria-haspopup="true"
              aria-expanded={showContactDropdown}
            >
              CONTACT US <ChevronDown className="w-4 h-4" />
            </button>

            {showContactDropdown && (
              <ul
                className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-200 animate-fade-in"
              >
                {contactLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 hover:bg-amber-100 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden mt-4 flex flex-col space-y-4 text-sm font-bold tracking-widest text-black uppercase px-2 pb-4"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleContactDropdown}
              className="flex items-center gap-1"
            >
              CONTACT US <ChevronDown className="w-4 h-4" />
            </button>
            {showContactDropdown && (
              <ul className="mt-2 ml-4 space-y-2 text-sm">
                {contactLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block hover:text-amber-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
