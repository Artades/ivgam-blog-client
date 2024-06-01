import { PostItemProps } from '@/types/post.interface';
import React, { FC, useState, useEffect } from 'react';
import PostCard from './PostCard/PostCard';

interface PostsGridProps {
  posts: PostItemProps[];
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1   gap-6 p-4">
      {posts.map((post) => (
        <PostCard key={post.id} postId={post.id}  />
      ))}
    </div>
  );
};

export default PostsGrid;
