import React from 'react';

const SkeletonsGrid = () => {
    return (
      <div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-7">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="border border-zinc-800 shadow rounded-md p-10 max-w-full w-full ">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-zinc-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-zinc-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-zinc-700 rounded col-span-2"></div>
                    <div className="h-2 bg-zinc-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-zinc-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default SkeletonsGrid;