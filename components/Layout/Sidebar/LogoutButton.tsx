import { Button } from '@/components/ui/button';
import { burnAccessToken } from '@/helpers/cookies';
import { removeAuthStatus } from '@/store/slices/authStatusSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const LogoutButton = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleLogout = () => {
      localStorage.removeItem('userEmail');
      burnAccessToken();
      dispatch(removeAuthStatus());
      router.push('/');
      
    };
    return (
    
        <Button
          size={'lg'}
          variant={'default'}
          onClick={() => handleLogout()}
        >
          Выйти
        </Button>
          
     
    );
};

export default LogoutButton;