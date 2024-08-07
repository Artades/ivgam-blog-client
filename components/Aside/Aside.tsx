import React from 'react';
import { FilterUsers } from './PopularUsers';
import * as Actions from "@/actions";
import Hashtags from '../Hashtags/Hashtags';

const Aside = async () => {
  const hashtags = await Actions.aside.getPopularHashtags();
  const users = await Actions.aside.getActiveUsers();
    return (
     
        <div className=" bg-transparent w-full flex flex-col items-center gap-y-5">
          <FilterUsers  users={users}/>
          <Hashtags hashtags={hashtags} flexDir='flex-col' position='aside' />
        </div>
   
    );
};

export default Aside;