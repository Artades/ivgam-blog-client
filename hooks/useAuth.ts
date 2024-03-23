// useAuthentication.ts
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/helpers/checkAuth';
import { useDispatch } from 'react-redux';
import { close, open } from '@/store/slices/mobileSheetSlice';
import { removeAuthStatus, setAuthStatus } from '@/store/slices/authStatusSlice';

const useAuthentication = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authStatus = await checkAuth();
        console.log('Authentication result:', authStatus);

        if ('redirect' in authStatus) {
         dispatch(open());
         dispatch(removeAuthStatus());
        } else if ('props' in authStatus) {
          router.push('/posts');
          dispatch(close());
          dispatch(setAuthStatus());
        }
      } catch (error) {
        console.error('Authentication error:', error);
        // router.push('/auth');
        dispatch(open());
      }
    };

    checkAuthentication();
  }, [router]);

  // You can customize the return value as needed
};

export default useAuthentication;
