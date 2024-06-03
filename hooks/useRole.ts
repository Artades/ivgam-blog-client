'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkRole } from '@/helpers/checkRole';

const useRole = (
  desiredRole: string,
  cancelDestination?: string,
): boolean | null => {
  const [response, setResponse] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleCheckRole = async () => {
      try {
        const roleStatus = await checkRole(desiredRole);
        console.log('Role result:', roleStatus);

        if ('props' in roleStatus) {
          setResponse(true);
        } else if ('redirect' in roleStatus) {
          setResponse(false);
          if (cancelDestination) {
            router.push(cancelDestination);
          }
        }
      } catch (error) {
        console.error('Role error:', error);
        setResponse(false);
        router.push('/');
      }
    };

    handleCheckRole();
  }, [desiredRole, router]);

  return response;
};

export default useRole;
