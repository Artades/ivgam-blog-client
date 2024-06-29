import { IoEyeOutline } from 'react-icons/io5';

import React, { FC } from 'react';
interface ViewStateProps {
  viewsCount: number
}
const ViewState:FC<ViewStateProps> = ({viewsCount}) => {
  return (
    <div className="group flex items-center space-x-2 opacity-50">
      <IoEyeOutline className={`size-4 font-bold cursor-pointer}`} />
      <span className="text-md">{viewsCount}</span>
    </div>
  );
};

export default ViewState;
