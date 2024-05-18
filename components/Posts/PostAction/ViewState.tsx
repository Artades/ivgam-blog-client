import { IoEyeOutline } from 'react-icons/io5';

import React from 'react';

const ViewState = () => {
  return (
    <div className="group flex items-center space-x-2 opacity-50">
      <IoEyeOutline className={`size-4 font-bold cursor-pointer}`} />
      <span className="text-md">0</span>
    </div>
  );
};

export default ViewState;
