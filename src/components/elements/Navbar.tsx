import React, { useState, useEffect } from "react";
import BtnLink from "../shared/BtnLink";
import Container from "../shared/Container";
import NavItem from "../shared/Navitem";

const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About us" },
  { href: "#features", text: "Features" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when navbar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Close navbar and navigate to section
  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex justify-between items-center relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">
              <span className="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
              <span className="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
              <span className="absolute w-4 h-4 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
              <span className="absolute w-2 h-2 rounded-full bg-heading-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </div>
            <div className="text-lg font-semibold text-heading-1">Contentsyndication</div>
          </a>

          {/* Toggle Button for Smaller Screens */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-heading-1 hover:bg-gray-100"
            onClick={toggleNavbar}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Full-screen Overlay Navigation for Mobile */}
          <div
            className={`${
              isOpen ? "fixed inset-0 bg-white z-50" : "hidden"
            } lg:hidden flex flex-col items-center justify-center space-y-8 text-lg font-semibold text-heading-1`}
          >
            {/* Close Button */}
            <button
              onClick={toggleNavbar}
              className="absolute top-6 right-6 text-gray-600 hover:text-heading-1"
              aria-label="Close navigation"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Nav Items */}
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                onClick={handleNavItemClick}
                className="hover:text-primary"
              >
                {item.text}
              </a>
            ))}

            {/* CTA Button */}
            <BtnLink
              text="Get Started"
              href="#cta"
              className="px-6 py-3 text-white bg-primary rounded-md shadow-md"
              variant="primary"
            />
          </div>

          {/* Regular Nav Items for Larger Screens */}
          <ul className="hidden lg:flex items-center space-x-6 text-lg font-semibold text-heading-1">
            {navItems.map((item) => (
              <NavItem key={item.text} {...item} />
            ))}
          </ul>

          {/* CTA Button for Larger Screens */}
          <div className="hidden lg:flex">
            <BtnLink
              text="Get Started"
              href="#cta"
              className="px-6 py-3 text-white bg-primary rounded-md shadow-md"
              variant="primary"
            />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
