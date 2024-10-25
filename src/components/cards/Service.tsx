import React from 'react';
import Paragraph from '../shared/Paragraph'; // Assuming Paragraph is a React component

export interface Props {
  title: string;
  description: string;
  icon: string;
}

const Service: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
      <div className="rounded-xl bg-gray-300 dark:bg-gray-950 p-3 text-heading-1 w-max relative">
        <span dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">
          {title}
        </h2>
        <Paragraph>{description}</Paragraph>
      </div>
      <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full"></span>
    </div>
  );
};

export default Service;
