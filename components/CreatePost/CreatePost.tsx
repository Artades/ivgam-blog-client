'use client';

import Helmet from '@/components/Helmet/Helmet';
import useRole from '@/hooks/useRole';
import React, { useEffect } from 'react';
import { CreatePostForm } from './CreatePostForm';
import { createBreadcrumbs } from './constants';
import { useRouter } from 'next/navigation';
import useAuthentication from '@/hooks/useAuth';

const CreatePost = () => {
  useAuthentication('/create');
  const isAuthor = useRole('author', '/suggest');

  if (isAuthor === null) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="w-ful">
      <Helmet pageTitle="Создать пост" breadCrumbs={createBreadcrumbs} />
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
