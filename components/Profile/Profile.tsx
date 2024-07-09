// Profile.tsx
'use client';

import useAuthentication from '@/hooks/useAuth';
import { UserProps } from '@/types/user.interface';
import React, { FC, ReactNode } from 'react';
import Wrapper from '../Layout/Wrapper/Wrapper';
import Image from 'next/image';
import Helmet from '../Helmet/Helmet';
import { profileBreadcrumbs } from './constants';
import { normalizeRole } from '@/helpers/normalizeRole';
import ProfileFavorites from './ProfileFavorites';
import Empty from '../Empty/Empty';

interface ProfileProps {
  user: UserProps;
}

const Profile: FC<ProfileProps> = ({ user }) => {
  useAuthentication(`/profile/${user.id}`);

  const breadcrumbs = profileBreadcrumbs.items.map((item) => {
    if (item.href === '/profile') {
      item.href = `/profile/${user.id}`;
    }
    return item;
  });

  const { role, Icon } = normalizeRole(user.role) as {
    role: string;
    Icon: React.ElementType;
  };

  return (
    <>
      <Helmet pageTitle="Профиль" breadCrumbs={{ items: [...breadcrumbs] }} />
      <Wrapper>
        <div className="w-full h-[50dvh] rounded-lg ">
          <section className="flex items-center justify-center flex-col py-10 border-b border-zinc-800 bg-zinc-950">
            <Image
              width={400}
              height={400}
              quality={100}
              className="block sm:size-[200px] size-[150px] border-2 border-zinc-200 border-dashed p-3 rounded-full"
              src={user.profilePicture}
              alt={user.name}
            />
            <div className="mt-5 text-center flex flex-col items-center gap-3">
              <h1 className="sm:text-3xl  text-2xl text-pretty font-bold text-white">
                {user.name}
              </h1>
              <p className="sm:text-xl text-lg leading-tight text-zinc-600">
                {user.email}
              </p>
              <div className="flex items-center justify-center space-x-3">
                <p className="text-xl underline underline-offset-4 leading-tight text-zinc-500">
                  {role}
                </p>
                {Icon && <Icon className="w-6 h-6" />}
              </div>
            </div>
          </section>

          <section className="my-10 h-full">
            {user.favorites.length ? (
              <ProfileFavorites favorites={user.favorites} />
            ) : (
              <Empty
                title="Нет избранных"
                description="У вас пока нет избранных"
              />
            )}
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Profile;
