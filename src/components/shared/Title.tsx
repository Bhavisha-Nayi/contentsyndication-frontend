import React from 'react';

interface HeadingProps {
  children: React.ReactNode; // Allow any valid React node as children
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
      {children}
    </h1>
  );
};

export default Heading;
