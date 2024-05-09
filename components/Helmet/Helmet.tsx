"use client"

import React, { FC } from 'react';
import { BreadCrumbs, BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';
import { usePathname, useRouter } from 'next/navigation';

interface HelmetProps {
  pageTitle: string;
  breadCrumbs?: BreadCrumbsProps;
}
const Helmet: FC<HelmetProps> = ({ pageTitle, breadCrumbs }) => {


  return (
    <nav className="w-full bg-zinc-950 border-b border-b-zinc-800 ">
      <div className="w-full px-5 py-7 flex items-start flex-col gap-y-6">
        <div className="w-full h-full">
          <h2 className="sm:text-3xl  text-2xl text-pretty font-bold text-white">
            {pageTitle}
          </h2>
        </div>

        {breadCrumbs && <BreadCrumbs items={breadCrumbs?.items} />}
      </div>
    </nav>
  );
};

export default Helmet;
