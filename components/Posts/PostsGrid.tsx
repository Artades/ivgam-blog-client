'use client ';

import { PostItemProps } from '@/types/post.interface';
import React, { FC, useState, useEffect } from 'react';
import PostCard from './PostCard/PostCard';
import { useQuery } from '@tanstack/react-query';
import * as Api from '@/api';

interface PostsGridProps {
  posts: PostItemProps[];
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  const [userEmail, setUserEmail] = useState<string | undefined>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('userEmail');
      if (email) {
        setUserEmail(email);
      }
    }
  }, []);

  const { data, isError, isFetching, isSuccess } = useQuery({
    queryKey: ['user'],
    queryFn: async () => await Api.users.getUserByEmail(userEmail),
  });

  const user = data ?? {};

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-7 ">
      {posts.map((post) => (
        <PostCard key={post.id} data={post} />
      ))}
    </div>
  );
};

export default PostsGrid;
