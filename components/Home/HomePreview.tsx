import React from 'react';

const HomePreview = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-5 py-10 px-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="w-full h-[250px] bg-zinc-700 rounded-lg"></div>
      ))}
    </div>
  );
};

export default HomePreview;
