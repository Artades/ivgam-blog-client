import { Login } from '@/components/Login/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Войти',
  description: 'Войти в аккаунт Ivgam Blog',
};

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
