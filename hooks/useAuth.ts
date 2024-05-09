// useAuthentication.ts
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/helpers/checkAuth';
import { useDispatch } from 'react-redux';
import { removeAuthStatus, setAuthStatus } from '@/store/slices/authStatusSlice';
import { closeLoginModal, openLoginModal } from '@/store/slices/authModalsSlice';

const useAuthentication = (direction?: string) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authStatus = await checkAuth();
        console.log('Authentication result:', authStatus);

        if ('redirect' in authStatus) {
           router.push('/');
         dispatch(openLoginModal());
         dispatch(removeAuthStatus());
        } else if ('props' in authStatus) {
          if(!direction){
            router.push('/posts');
          } else {
            router.push(direction)
          }
          
          dispatch(closeLoginModal());
          dispatch(setAuthStatus());
        }
      } catch (error) {
        console.error('Authentication error:', error);
        router.push('/');
        dispatch(openLoginModal());
      }
    };

    checkAuthentication();
  }, [router]);

  // You can customize the return value as needed
};

export default useAuthentication;
