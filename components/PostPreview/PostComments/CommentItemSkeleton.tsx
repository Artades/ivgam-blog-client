import React from 'react';
import Image from 'next/image';

const CommentItemSkeleton = () => {
  return (
    <div className="w-full p-5 border-b border-zinc-800">
      <div className="flex items-center mb-2">
        <div className="relative w-10 h-10 rounded-lg mr-3 overflow-hidden animate-pulse">
          <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
        </div>
        <div>
          <h4 className="w-24 h-3 bg-zinc-700 rounded-full animate-pulse"></h4>
          <p className="w-40 h-2 mt-1 bg-zinc-700 rounded-full animate-pulse"></p>
        </div>
      </div>
      <p className="w-full h-2 bg-zinc-700 rounded-full animate-pulse"></p>
    </div>
  );
};

export default CommentItemSkeleton;
