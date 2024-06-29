import { Button } from '@/components/ui/button';
import { burnAuthData } from '@/helpers/cookies';
import { resetUser } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('suggestions');
    dispatch(resetUser());

    burnAuthData()

    router.push('/');
  };
  return (
    <Button size={'lg'} variant={'default'} onClick={() => handleLogout()}>
      Выйти
    </Button>
  );
};

export default LogoutButton;
