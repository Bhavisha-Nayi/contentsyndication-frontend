import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import icon for dropdown
import BtnLink from "../shared/BtnLink";
import Container from "../shared/Container";
import NavItem from "../shared/Navitem";

const navItems = [
  { href: "#about-us", text: "About us" },
  {
    href: "#services",
    text: "Services",
    subItems: [
      { href: "/linkedin-lead-generation", text: "LinkedIn Lead Generation" },
      { href: "/cold-email-lead-generation", text: "Cold Email Lead Generation" },
    ],
  },
  { href: "#features", text: "Features" },
  { href: "/blog", text: "Blog" },
  { href: "/sign-in", text: "Login" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-4">
      <Container>
        <nav className="w-full flex justify-between items-center relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="relative w-6 h-6 overflow-hidden flex rounded-lg">
              <span className="absolute w-3 h-3 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
              <span className="absolute w-3 h-3 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
              <span className="absolute w-3 h-3 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
              <span className="absolute w-1.5 h-1.5 rounded-full bg-heading-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </div>
            <div className="text-base font-medium text-heading-1">Contentsyndication</div>
          </a>
          {/* <img src="/images/contentsyndication.png" alt="logo" width='10%' height='120px' /> */}

          {/* Toggle Button for Smaller Screens */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-heading-1 hover:bg-gray-100"
            onClick={toggleNavbar}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? (
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Full-screen Overlay Navigation for Mobile */}
          <div
            className={`${
              isOpen ? "fixed w-full inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4 text-base font-medium text-heading-1" : "hidden"
            } lg:hidden`}
          >
            {navItems.map((item) => (
              <div key={item.text} className="w-full text-center">
                {item.subItems ? (
                  <>
                    <button
                      onClick={toggleServices}
                      className="block w-full text-center px-5 py-2 hover:text-primary"
                    >
                      {item.text} <FaChevronDown className="inline-block ml-2" />
                    </button>
                    {isServicesOpen && (
                      <ul className="pl-0 mt-1 space-y-1 text-sm">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.text} className="text-center">
                            <a
                              href={subItem.href}
                              className="block px-4 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-primary rounded-md transition-all duration-200"
                              onClick={handleNavItemClick}
                            >
                              {subItem.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-5 py-2 hover:text-primary"
                    onClick={handleNavItemClick}
                  >
                    {item.text}
                  </a>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <BtnLink
              text="Get Started"
              href="#cta"
              className="px-5 py-2 text-white bg-primary rounded-md shadow-md"
              variant="primary"
            />
          </div>

          {/* Regular Nav Items for Larger Screens */}
          <ul className="hidden lg:flex items-center space-x-4 text-base font-medium text-heading-1">
            {navItems.map((item) => (
              <li
                key={item.text}
                className="relative group"
              >
                <NavItem {...item} />
                {item.subItems && (
                  <ul className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md z-10 hidden group-hover:block">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.text}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-primary rounded-md transition-all duration-200"
                          onClick={handleNavItemClick}
                        >
                          {subItem.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button for Larger Screens */}
          <div className="hidden lg:flex">
            <BtnLink
              text="Get Started"
              href="#cta"
              className="px-5 py-2 text-white bg-primary rounded-md shadow-md"
              variant="primary"
            />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
