'use client';

import React, { FC } from 'react';
import PostCard from '../Posts/PostCard/PostCard';
import { FavoriteProps } from '@/types/favorite.interface';

interface ProfileFavoritesProps {
  favorites: FavoriteProps[];
}
const ProfileFavorites: FC<ProfileFavoritesProps> = ({ favorites }) => {
  let favIds: number[] = favorites.map(
    (favorite: FavoriteProps) => favorite.postId,
  );

  return (
    <div className="w-full flex flex-col items-start gap-y-5">
      <h2 className="sm:text-3xl  text-2xl text-pretty font-bold text-white px-5">
        Избранные
      </h2>
      <div className="w-full grid  grid-cols-1 sm:grid-cols-2 max-w-full gap-6 p-4">
      {favIds.map((id: number) => (
          <PostCard key={id} postId={id} />
        ))}
      </div>
    </div>
  );
};

export default ProfileFavorites;
