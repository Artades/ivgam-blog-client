import { Button } from '@/components/ui/button';;
import { resetUser } from '@/store/slices/userSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Api from '@/api';
import { showErrorToast } from '@/components/Error/showErrorToast';

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await Api.auth.burnAuthToken();
      localStorage.removeItem('suggestions');
      dispatch(resetUser());
      router.push('/');
    } catch (error) {
      console.log('Error:', error);
      showErrorToast('Возникла ошибка при выходе');
    }
  };
  return (
    <Button size={'lg'} variant={'default'} onClick={() => handleLogout()}>
      Выйти
    </Button>
  );
};

export default LogoutButton;
