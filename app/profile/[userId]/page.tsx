import { Metadata, ResolvingMetadata } from 'next/types';
import React from 'react';
import * as Actions from '@/actions';
import Profile from '@/components/Profile/Profile';

type Props = {
  params: { userId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { userId } = params;
  const id = parseInt(userId);
  const user = await Actions.users.getUserById(id);

  return {
    title: `Профиль | ${user.name}`,
  };
}

export default async function ProfilePage({ params }: Props) {
  const { userId } = params;
  const id = parseInt(userId);

  const user = await Actions.users.getUserById(id);

  return <Profile user={user} />;
}
