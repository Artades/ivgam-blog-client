'use client';
import useAuthentication from '@/hooks/useAuth';
import React from 'react';
import Helmet from '../Helmet/Helmet';
import { suggestBreadcrumbs } from './constants';
import { SuggestForm } from './SuggestForm';

const Suggest = () => {
  useAuthentication('/suggest');

  return (
    <div className="w-ful">
      <Helmet pageTitle="Предложить пост" breadCrumbs={suggestBreadcrumbs} />
      <SuggestForm />
    </div>
  );
};

export default Suggest;
