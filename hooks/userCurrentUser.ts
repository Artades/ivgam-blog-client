"use client";

import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { getUserByEmail } from '@/api/users';

const useCurrentUser = () => {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ['user', email],
    queryFn: () => getUserByEmail(email),
    enabled: !!email,
    //@ts-ignore
    onError: () => {
      console.error('No access. Without redirect');
    },
  });

  return { data, error, isLoading };
};

export default useCurrentUser;
