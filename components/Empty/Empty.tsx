import React, { FC } from 'react';

import { PuffLoader } from 'react-spinners';

interface EmptyProps {
  title: string;
  description: string;
}
const Empty: FC<EmptyProps> = ({ title, description }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-10 relative">
      <PuffLoader
        size={150}
        speedMultiplier={1}
        color="white"
        className="opacity-50 absolute"
      />

      <div className="w-full flex flex-col justify-center items-center space-y-5 z-1">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Empty;
