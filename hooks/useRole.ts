'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store'; // Adjust the import according to your store setup

const useRole = (desiredRole: string, cancelDestination?: string): boolean => {
  const router = useRouter();
  const userRole = useSelector((state: RootState) => state.user.role);

  useEffect(() => {
    if (userRole !== desiredRole) {
      console.log(userRole === desiredRole)
      if (cancelDestination) {
        router.push(cancelDestination);
      } else {
        router.push("/posts");
        console.error('No access. Without redirect');
      }
    }
  }, [desiredRole, cancelDestination, router, userRole]);

  return userRole === desiredRole;
};

export default useRole;
