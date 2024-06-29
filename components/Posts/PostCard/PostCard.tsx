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
import ShareButton from '../PostAction/ShareButton';
import Date from '../PostAction/Date';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

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

  const { id } = useSelector((state: RootState) => state.user);

  const { data: userData } = useQuery({
    queryKey: ['users', id],
    queryFn: () => Api.users.getUserById(id),
    enabled: !!id,
  });

  const user = userData ?? {} as UserProps;
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
  // console.log("Data: ", post)
  return (
    <Card
      className={`w-full   rounded-lg border border-zinc-700  h-[500px] bg-blackz`}
      style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
    >
      <div className="w-full h-full grid grid-cols-1 grid-rows-6 relative">
        <div className="row-span-4 relative ">
          <PostImage id={post.id} src={post.imageUrl} />
          <div className="transition-all duration-700 absolute inset-0 bg-gradient-to-t from-black pointer-events-none "></div>
        </div>
        <div
          className={`w-full absolute bottom-0 flex flex-col justify-between space-y-5 items-start pb-5 px-5`}
        >
          <div className="flex flex-col items-start gap-3">
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="text-md text-muted-foreground tracking-tight">
              {shortenBody(post.body, 50)}
            </p>
          </div>
          <div className="w-full flex flex-col space-y-10 items-start">
            <article className="w-full flex items-center justify-between">
              <div className="flex space-x-2">
                <ReadButton id={post.id.toString()} />
                <ShareButton />
              </div>

              <FavoriteButton
                isLiked={isLiked}
                amount={post.likesAmount}
                postId={post.id}
                userId={user.id}
              />
            </article>
            <article className="flex justify-between items-center w-full">
              <ViewState viewsCount={post.views} />

              <Date timestamp={post.dateOfCreation} />

            </article>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
