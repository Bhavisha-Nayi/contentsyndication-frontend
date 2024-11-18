import React from "react";

export interface Props {
  href: string;
  text: string;
}

const NavItem: React.FC<Props> = ({ href, text }) => {
  return (
    <ul><li>
      <a
        href={href}
        className="duration-300 font-medium ease-linear hover:text-primary py-3"
      >
        {text}
      </a>
    </li></ul>
  );
};

export default NavItem;
