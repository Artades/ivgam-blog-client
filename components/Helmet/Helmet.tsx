"use client"

import React, { FC } from 'react';
import { BreadCrumbs, BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';
import { usePathname, useRouter } from 'next/navigation';
import { MobileSheet } from '../Layout/MobileSheet/MobileSheet';

interface HelmetProps {
  pageTitle: string;
  breadCrumbs?: BreadCrumbsProps;
}
const Helmet: FC<HelmetProps> = ({ pageTitle, breadCrumbs }) => {


  return (
    <nav className="w-full bg-zinc-950 border-b border-b-zinc-800 ">
      <div className="w-full px-5 py-7 flex items-start flex-col gap-y-6">
        <div className="w-full h-full flex items-center justify-between">
          <h2 className="sm:text-3xl  text-2xl text-pretty font-bold text-white">
            {pageTitle}
          </h2>
          <nav className='sm:hidden block'>
            <MobileSheet /> 
          </nav>
        </div>

        {breadCrumbs && <BreadCrumbs items={breadCrumbs?.items} />}
      </div>
    </nav>
  );
};

export default Helmet;
