'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import useRole from '@/hooks/useRole';
import Helmet from '../Helmet/Helmet';
import { createBreadcrumbs } from './constants';
import { CreatePostForm } from './CreatePostForm';
import useAuthentication from '@/hooks/useAuth';
import NoAccess from '../NoAccess/NoAccess';

const CreatePost = () => {
  useAuthentication('/create'); // Always at the same level

  const hasRole = useRole('author', '/suggest');


  if (!hasRole) {
    return  <NoAccess
    title="403 | Доступ ограничен"
    description="У вас нет необходимых прав доступа для просмотра этой страницы."
  /> 
  }

  return (
    <div className="w-full">
      <Helmet pageTitle="Создать пост" breadCrumbs={createBreadcrumbs} />
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
