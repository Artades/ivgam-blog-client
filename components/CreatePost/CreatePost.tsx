'use client';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import { CreatePostForm } from './CreatePostForm';
import useAuthentication from '@/hooks/useAuth';
import NoAccess from '../NoAccess/NoAccess';
import { Breadcrumbs } from '@/helpers/breadCrumbs';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const CreatePost = () => {
  useAuthentication('/create');
  const { id, role } = useSelector((state: RootState) => state.user);
  
  const breadCrumbs = new Breadcrumbs('create', role, id).generateBreadcrumbs();

  if (role !== "author") {
    return (
      <NoAccess
        title="403 | Доступ ограничен"
        description="У вас нет необходимых прав доступа для просмотра этой страницы."
      />
    );
  }

  return (
    <div className="w-full">
      <Helmet
        pageTitle="Создать пост"
        breadCrumbs={{ items: [...breadCrumbs] }}
      />
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
