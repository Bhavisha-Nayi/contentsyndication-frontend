import React from 'react';

interface Props {
  children: React.ReactNode;
}

const GroupFooterNav: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 h-max">
      {children}
    </div>
  );
};

export default GroupFooterNav;
