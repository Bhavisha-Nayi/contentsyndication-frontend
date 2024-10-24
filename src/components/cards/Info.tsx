import React from 'react';
import Paragraph from '../shared/Paragraph';

export interface Props {
  title: string;
  description: string;
  children?: React.ReactNode; // Add children to the Props interface
}

const Info: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <div className="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative">
        {children} {/* Render children here */}
      </div>
      <h2 className="md:text-xl font-semibold text-heading-2 mt-6 mb-4">{title}</h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default Info;
