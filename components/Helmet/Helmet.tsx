"use client"

import React, { FC } from 'react';
import { BreadCrumbs, BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';
import { MobileSheet } from '../Layout/MobileSheet/MobileSheet';

interface HelmetProps {
  pageTitle: string;
  breadCrumbs?: BreadCrumbsProps;
}
const Helmet: FC<HelmetProps> = ({ pageTitle, breadCrumbs }) => {


  return (
    <nav className="z-[1] w-full bg-black/50 backdrop-blur-lg border-b border-b-zinc-800 sticky top-0 ">
      <div className="w-full px-5 sm:py-5 py-3 flex items-start flex-col sm:gap-y-2 ">
        <div className="w-full h-full flex items-center justify-between">
          <h2 className="sm:text-3xl  text-2xl text-pretty font-bold text-white">
            {pageTitle}
          </h2>
          <nav className='lg:hidden block'>
            <MobileSheet /> 
          </nav>
        </div>

        {breadCrumbs && <BreadCrumbs items={breadCrumbs?.items} />}
      </div>
    </nav>
  );
};

export default Helmet;
