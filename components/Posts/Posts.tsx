'use client'
import useAuthentication from '@/hooks/useAuth';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import { postsBreadcrumbs } from './constants';
import PostsGrid from './PostsGrid';

const Posts = () => {
   useAuthentication();

   
    return (
      <div className="w-full">
        <Helmet pageTitle="Посты" breadCrumbs={postsBreadcrumbs} />
        <PostsGrid />
      </div>
    );
};

export default Posts;