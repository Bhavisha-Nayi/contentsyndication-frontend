import React from 'react';

export interface Props {
  className?: string;
  variant: 'primary' | 'secondary';
  children: any;
}

const Button: React.FC<Props> = ({ className, variant, children }) => {
  const getThemeStyle = (variant: 'primary' | 'secondary') => {
    if (variant === 'primary') {
      return 'bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]';
    }
    return 'text-primary';
  };

  return (
    <button
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                  ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
