import { Metadata, ResolvingMetadata } from 'next/types';
import React from 'react';
import * as Actions from '@/actions';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Profile from '@/components/Profile/Profile';



export async function generateMetadata(
  parent: ResolvingMetadata,
): Promise<Metadata> {


  return {
    title: 'Профиль',
    
  };
}

export default async function ProfilePage() {
 const {id} = useSelector((state: RootState) => state.user);
  const user = await Actions.users.getUserById(id);

  console.log(user)

  return (
    <Profile user={user} />
  )
}
