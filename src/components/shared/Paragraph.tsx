import React from 'react';

export interface Props {
  className?: string;
  children: any;
}

const Paragraph: React.FC<Props> = ({ className, children }) => {
  return (
    <p className={`md:text-lg text-heading-3 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
