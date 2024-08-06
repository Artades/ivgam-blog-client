import Helmet from '@/components/Helmet/Helmet';
import { Register } from '@/components/Register/Register';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Создать аккаунт',
  description: 'Создать аккаунт | Ivgam Blog',
};

const RegisterPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
