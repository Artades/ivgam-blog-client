'use client';
import useAuthentication from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import Helmet from '../Helmet/Helmet';
import PostsGrid from './PostsGrid';
import { useQuery } from '@tanstack/react-query';
import * as Api from '@/api';
import CustomError from '../Error/CustomError';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Breadcrumbs } from '@/helpers/breadCrumbs';
import { SortProps } from '@/types/sort.type';
import { SortSelect } from '../SortSelect/SortSelect';
import Wrapper from '../Layout/Wrapper/Wrapper';

const Posts = () => {
  const { id, role } = useSelector((state: RootState) => state.user);
  useAuthentication('/posts');

  const [sortParams, setSortParams] = useState<{
    dateSort?: SortProps;
    popularSort?: SortProps;
  }>({});

  const { data, isError, isSuccess, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: () => Api.posts.getAllPosts(sortParams),
  });

  useEffect(() => {
    refetch();
  }, [sortParams, refetch]);

  const posts = data ?? [];

  const breadCrumbs = new Breadcrumbs('posts', role, id).generateBreadcrumbs();

  return (
    <>
      <Helmet pageTitle="Посты" breadCrumbs={{ items: [...breadCrumbs] }} />
      <div className=" relative ">
        <nav className='p-4'>
          <SortSelect sortParams={sortParams} setSortParams={setSortParams} />
        </nav>

        {isSuccess && <PostsGrid posts={posts} />}
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
