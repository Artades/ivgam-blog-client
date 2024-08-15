'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Wrapper from './Wrapper/Wrapper';
import { cn } from '@/lib/utils';
import { SuccessModal } from '../Modals/SuccessModal';
import Aside from '../Aside/Aside';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    // Проверяем, что код выполняется на клиенте
    if (typeof window !== 'undefined') {
      setScreenHeight(window.innerHeight);

      const handleResize = () => {
        setScreenHeight(window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <>
      <div className="bg-black" style={{ height: `${screenHeight}px` }}>
        <Wrapper>
          <div className="h-full xl:px-30 w-full">
            <div className="w-full grid grid-cols-6 h-full">
              <Sidebar />
              <div
                className={cn(
                  'w-full h-full relative scrollbar-track-zinc-800 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full overflow-auto col-span-6 lg:col-span-4 lg:border-x-[1px] border-neutral-800 bg-black',
                )}
              >
                {children}
              </div>
              <div className="hidden lg:block md:col-span-1 w-full lg:pl-6 py-7 relative h-full">
                <Aside />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <SuccessModal />
    </>
  );
};

export default Layout;
