import React, { FC, ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[1240px] h-full  2xl:max-w-[1640px] mx-auto  md:px-2 lg:px-0">
      {children}
    </div>
  );
};

export default Wrapper;
