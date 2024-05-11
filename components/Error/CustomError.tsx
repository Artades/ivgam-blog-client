import React, { ReactNode } from 'react';
import { MdRunningWithErrors } from 'react-icons/md';
interface CustomErrorProps {
  title: string;
  description: string;
  Icon?: ReactNode;
}

const CustomError: React.FC<CustomErrorProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center relative">
      {/* Здесь вы можете использовать переданные в пропсах данные */}
      <MdRunningWithErrors className='size-[400px] opacity-10 absolute animate-pulse  ' />
      <div className="w-full h-full flex flex-col justify-center items-center z-1 space-y-5">
        <h2 className='text-4xl font-bold'>{title}</h2>
        <p className='text-lg'>{description}</p>
      </div>
    </div>
  );
};

export default CustomError;
