'use client';
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Wrapper from './Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';
import { AuthModal } from '../Modals/AuthModal';
import useAuthentication from '@/hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { cn } from '@/lib/utils';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAuthentication();
  const { authStatus } = useSelector((state: RootState) => state.authStatus);

  console.log(authStatus)
  return (
    <>
    <div className="h-screen bg-black">
      <Wrapper>
        <div className="h-full xl:px-30 w-full">
          <div className="w-full grid grid-cols-6 h-full">
            <Sidebar />
            <div
              className={cn(" w-full col-span-6 lg:col-span-4 lg:border-x-[1px]  border-neutral-800 ", authStatus === "not authenticated" ? 'blur-md' : ''
             
              
             
              
          )}
            >
            
              {children}
            </div>
            {/* <FollowBar /> */}
          </div>
        </div>
      </Wrapper>
    </div>
    <AuthModal />
    </>
  );
};

export default Layout;
