import { shortenBody } from '@/helpers/shortenBody';
import { PostItemProps } from '@/types/post.interface';
import React, { FC } from 'react';
import ReadButton from '../PostAction/ReadButton';
import FavoriteButton from '../PostAction/FavoriteButton';
import ViewState from '../PostAction/ViewState';
import PostImage from './PostImage';
import { Card } from '@/components/ui/card';
import useLike from '@/hooks/useLike';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import * as Api from '@/api';
import CustomError from '@/components/Error/CustomError';
import SkeletonPost from '@/components/Skeletons/SkeletonPost';
import { UserProps } from '@/types/user.interface';

interface PostCardProps {
  postId: number;
}

const PostCard: FC<PostCardProps> = ({ postId }) => {
  const queryClient = useQueryClient();
  const cachedPost = queryClient.getQueryData(['post', postId]);

  const { data, isError, isFetching } = useQuery({
    queryKey: ['posts', postId],
    queryFn: async () => await Api.posts.getPostById(postId),
    initialData: cachedPost,
    enabled: !!postId,
  });

  const post = data as PostItemProps;

  const userEmail =
    typeof window !== 'undefined' ? localStorage.getItem('userEmail') : '';
  const {data: userData}= useQuery({
    queryKey: ['users', userEmail],
    queryFn: () => Api.users.getUserByEmail(userEmail!),
    enabled: !!userEmail,
  });

  const user  = userData ?? {} as UserProps;
  const userFavorites = user?.favorites ?? [];

  const isLiked = useLike({ postId: post?.id, userFavorites });

  if (isFetching) {
    return <SkeletonPost />;
  }

  if (isError) {
    return (
      <CustomError
        title="Возникла Ошибка"
        description="Ошибка получения поста"
      />
    );
  }

  return (
    <Card
      className={`w-full   rounded-lg border border-zinc-700 ${postId % 2 === 0 ? 'sm:row-span-3'  : 'sm:row-span-2'}`}
      style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
    >
      <div className="w-full h-full grid grid-cols-1 grid-rows-6 ">
        <div className="row-span-2">
          <PostImage id={post.id} />
        </div>
        <div
          className={`w-full row-span-4 flex flex-col justify-between space-y-5 items-start p-5`}
        >
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="text-md text-muted-foreground tracking-tight">
              {shortenBody(post.body, 50)}
            </p>
          </div>
          <div className="w-full flex flex-col space-y-7 items-start">
            <article className="w-full flex items-center justify-between">
              <ReadButton />

              <FavoriteButton
                isLiked={isLiked}
                amount={post.likesAmount}
                postId={post.id}
                userId={user.id}
              />
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
