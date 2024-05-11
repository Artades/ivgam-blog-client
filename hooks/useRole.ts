// useRole.ts
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkRole } from '@/helpers/checkRole';

const useRole = (desiredRole: string) => {
  const [response, setResponse] = useState<boolean>(false);
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
        }
      } catch (error) {
        console.error('Role error:', error);
        setResponse(false)
      }
    };

    handleCheckRole();
  }, [router]);

  return response;
};

export default useRole;
