'use client';
import useAuthentication from '@/hooks/useAuth';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import { postsBreadcrumbs } from './constants';
import PostsGrid from './PostsGrid';
import { useQuery } from '@tanstack/react-query';
import * as Api from '@/api';
import SkeletonsGrid from '../Skeletons/SkeletonsGrid';
import CustomError from '../Error/CustomError';

const Posts = () => {
  useAuthentication();

  const { data, isError, isFetching, isSuccess } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => await Api.posts.getAllPosts(),
  });

  const posts = data ?? [];

  return (
    <>
      <Helmet pageTitle="Посты" breadCrumbs={postsBreadcrumbs} />
      <div className="sm:px-5 py-5">
        {isSuccess && <PostsGrid posts={posts} />}
        {isFetching && <SkeletonsGrid />}
      </div>
      {isError && (
        <CustomError
          title="Возникла Ошибка"
          description="Ошибка получения постов"
        />
      )}
    </>
  );
};

export default Posts;
