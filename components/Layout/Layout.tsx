import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Wrapper from './Wrapper/Wrapper';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <Wrapper>
        <div className="h-full xl:px-30 w-full">
          <div className="w-full grid grid-cols-6 h-full">
            <Sidebar />
            <div
              className="
              w-full
              col-span-6
              lg:col-span-4
              lg:border-x-[1px] 
              border-neutral-800
              
          "
            >
              {children}
            </div>
            {/* <FollowBar /> */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Layout;
