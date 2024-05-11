import { Button } from '@/components/ui/button';
import { burnAuthData } from '@/helpers/cookies';
import { removeAuthStatus } from '@/store/slices/authStatusSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('suggestions');
    burnAuthData();

    dispatch(removeAuthStatus());
    router.push('/');
  };
  return (
    <Button size={'lg'} variant={'default'} onClick={() => handleLogout()}>
      Выйти
    </Button>
  );
};

export default LogoutButton;
