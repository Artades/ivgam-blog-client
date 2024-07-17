'use client';
import useAuthentication from '@/hooks/useAuth';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import PostsGrid from './PostsGrid';
import { useQuery } from '@tanstack/react-query';
import * as Api from '@/api';
import CustomError from '../Error/CustomError';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Breadcrumbs } from '@/helpers/breadCrumbs';

const Posts = () => {
  const { id, role } = useSelector((state: RootState) => state.user);
  useAuthentication('/posts');

  const { data, isError, isFetching, isSuccess } = useQuery({
    queryKey: ['posts'],
    queryFn: Api.posts.getAllPosts,
  });

  const posts = data ?? [];

const breadCrumbs = new Breadcrumbs("posts", role, id).generateBreadcrumbs();

  return (
    <>
      <Helmet
        pageTitle="Посты"
        breadCrumbs={{items: [...breadCrumbs]}}
      />
      <div className="py-5">{isSuccess && <PostsGrid posts={posts} />}</div>
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
