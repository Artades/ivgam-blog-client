'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useRole from '@/hooks/useRole';
import Helmet from '../Helmet/Helmet';
import { createBreadcrumbs } from './constants';
import { CreatePostForm } from './CreatePostForm';
import useAuthentication from '@/hooks/useAuth';

const CreatePost = () => {
  const router = useRouter();
  // useAuthentication('/create'); // Вызов всегда должен быть на одном уровне
  // //
  // const isAuthor = useRole('author', '/suggest');

  // useEffect(() => {
  //   if (isAuthor === false) {
  //     router.push('/suggest');
  //   }
  // }, [isAuthor, router]);

  // if (isAuthor === null) {
  //   return <div>Загрузка...</div>;
  // }

  return (
    <div className="w-ful">
      <Helmet pageTitle="Создать пост" breadCrumbs={createBreadcrumbs} />
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
