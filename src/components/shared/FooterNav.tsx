import React from "react";

export interface NavItem {
  itemText: string;
  itemLink: string;
}

export interface Props {
  title: string;
  navItems: NavItem[];
}

const Navbar: React.FC<Props> = ({ title, navItems }) => {
  return (
    <nav className="space-y-6">
      <h2 className="capitalize font-medium text-lg">
        {title}
      </h2>
      <ul className="space-y-3 font-medium md:text-lg">
        {navItems.map((navItem, index) => (
          <li key={index}>
            <a href={navItem.itemLink} className="transition text-customBlue hover:text-customOrange text-base">
              {navItem.itemText}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
