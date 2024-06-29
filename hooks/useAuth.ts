'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/helpers/checkAuth';
import { useDispatch } from 'react-redux';
import { removeAuthStatus, setAuthStatus, setUserId, setUserRole, resetUser } from '@/store/slices/userSlice';
import { closeLoginModal, openLoginModal } from '@/store/slices/authModalsSlice';

const useAuthentication = (direction?: string) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const authStatus: any = await checkAuth();

        if ('redirect' in authStatus) {
          router.push('/');
          dispatch(openLoginModal());
          dispatch(resetUser());
        } else if ('props' in authStatus) {
          const { id, role } = authStatus.props;

          if (!direction) {
            router.push('/posts');
          } else {
            router.push(direction);
          }

          dispatch(setAuthStatus());
          dispatch(setUserId(id));
          dispatch(setUserRole(role));
          dispatch(closeLoginModal());
        }
      } catch (error) {
        console.error('Authentication error:', error);
        router.push('/');
        dispatch(openLoginModal());
        dispatch(resetUser());
      }
    };

    checkAuthentication();
  }, [router]);

  // You can customize the return value as needed
};

export default useAuthentication;
