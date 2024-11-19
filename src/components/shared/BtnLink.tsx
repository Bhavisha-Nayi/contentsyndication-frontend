import React from 'react';

interface Props {
  href: string;
  text: string;
  className?: string;
  variant: 'primary' | 'secondary';
}

const ButtonLink: React.FC<Props> = ({ href, text, className = '', variant }) => {

  const getThemeStyle = (variant: 'primary' | 'secondary') => {
    if (variant === 'primary') {
      return 'bg-primary border-transparent relative after:bg-customOrange hover:border-customOrange';
    }
    return 'text-primary';
  };

  const getTextColor = (variant: 'primary' | 'secondary') => {
    if (variant === 'primary') {
      return 'text-white';
    }
    return 'text-primary';
  };

  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
        after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-customOrange
        ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`}
    >
      <span className={`relative ${getTextColor(variant)} z-10`}>
        {text}
      </span>
    </a>
  );
};

export default ButtonLink;
