'use client'
import useAuthentication from '@/hooks/useAuth';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import { postsBreadcrumbs } from './constants';

const Posts = () => {
   
    return (
      <div className="w-full">
        <Helmet pageTitle="Посты" breadCrumbs={postsBreadcrumbs} />
      </div>
    );
};

export default Posts;