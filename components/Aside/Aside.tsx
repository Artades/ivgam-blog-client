import React from 'react';
import { FilterUsers } from './PopularUsers';
import * as Actions from "@/actions";
import Hashtags from '../Hashtags/Hashtags';

const Aside = async() => {
  const hashtags = await Actions.aside.getPopularHashtags();
  const users = await Actions.aside.getActiveUsers();
    return (
      <aside className="hidden lg:block md:col-span-1 h-full w-full  lg:pl-6 py-7 relative scrollbar-track-zinc-800 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full   max-h-screen  bg-black">
        <div className="w-full flex flex-col items-center gap-y-5">
          <FilterUsers  users={users}/>
          <Hashtags hashtags={hashtags} flexDir='flex-col' position='aside' />
        </div>
      </aside>
    );
};

export default Aside;