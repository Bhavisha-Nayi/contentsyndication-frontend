import React from "react";

export interface Props {
  className?: string;
  children: any;
}

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
