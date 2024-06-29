import React, { ReactNode } from 'react';
import { MdRunningWithErrors } from 'react-icons/md';

interface NoAccessProps {
  title: string;
  description: string;
  Icon?: ReactNode;
}

const NoAccess: React.FC<NoAccessProps > = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center relative">
      <MdRunningWithErrors className='size-[400px] opacity-10 absolute animate-pulse  ' />
      <div className="w-full h-full flex flex-col justify-center items-center z-1 space-y-5">
        <h2 className='text-4xl font-bold'>{title}</h2>
        <p className='text-lg'>{description}</p>
      </div>
    </div>
  );
};

export default NoAccess;
