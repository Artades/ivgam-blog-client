'use client';

import { PostItemProps } from '@/types/post.interface';
import React, { FC, useState, useEffect } from 'react';
import PostCard from './PostCard/PostCard';
import { useQuery } from '@tanstack/react-query';
import * as Api from '@/api';
import { UserProps } from '@/types/user.interface';

interface PostsGridProps {
  posts: PostItemProps[];
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-7">
      {posts.map((post) => (
        <PostCard key={post.id}  postId={post.id} />
      ))}
    </div>
  );
};

export default PostsGrid;
