'use client';
import { shortenBody } from '@/helpers/shortenBody';
import { PostItemProps } from '@/types/post.interface';
import React, { FC } from 'react';
import ReadButton from '../PostAction/ReadButton';
import FavoriteButton from '../PostAction/FavoriteButton';
import ViewState from '../PostAction/ViewState';
import PostImage from './PostImage';
import { Card } from '@/components/ui/card';
import useLike from '@/hooks/useLike';

interface PostCardProps {
  userFavorites: any;
  data: PostItemProps;
}

const PostCard: FC<PostCardProps> = ({ data, userFavorites }) => {
  const isLiked = useLike({ postId: data.id, userFavorites });

  console.log("isLiked: ", isLiked)
  return (
    <Card className={`w-full h-auto rounded-lg border border-zinc-700`}>
      <div className="w-full grid grid-cols-1 grid-rows-5">
        <div className="row-span-2">
          <PostImage id={data.id} />
        </div>
        <div
          className={`w-full row-span-3 flex flex-col justify-between items-start p-10`}
        >
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p className="text-md text-muted-foreground tracking-tight">
              {shortenBody(data.body, 70)}
            </p>
          </div>

          <div className="w-full flex flex-col space-y-7 items-start">
            <article className="w-full flex items-center justify-between">
              <ReadButton />
              <FavoriteButton isLiked={isLiked} amount={data.likesAmount} />
            </article>

            <article className="flex items-center">
              <ViewState />
            </article>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
