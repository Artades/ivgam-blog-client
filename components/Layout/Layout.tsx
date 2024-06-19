"use client"
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Wrapper from './Wrapper/Wrapper';
import { cn } from '@/lib/utils';
import { LoginModal } from '../Modals/LoginModal';
import { RegisterModal } from '../Modals/RegisterModal';
import { SuccessModal } from '../Modals/SuccessModal';
import Aside from '../Aside/Aside';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  
  return (
    <>
      <div
        className={cn(
          'h-screen bg-black',
          // authStatus === 'not authenticated' ? 'blur-md' : '',
        )}
      >
        <Wrapper>
          <div className="h-full xl:px-30 w-full">
            <div className="w-full grid grid-cols-6 h-full">
              <Sidebar />
              <div
                className={cn(
                  'w-full relative scrollbar-track-zinc-800 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full   max-h-screen overflow-auto col-span-6 lg:col-span-4 lg:border-x-[1px]  border-neutral-800 h-full bg-black',
                )}
              >
                {children}
              </div>
              <Aside />
            </div>
          </div>
        </Wrapper>
      </div>
      <LoginModal />
      <RegisterModal />
      <SuccessModal />
    </>
  );
};

export default Layout;
