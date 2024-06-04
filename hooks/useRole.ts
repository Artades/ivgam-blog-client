import { useQuery } from '@tanstack/react-query';
import { checkRole } from '@/helpers/checkRole';
import { useRouter } from 'next/navigation';

const useRole = (desiredRole: string, cancelDestination?: string) => {
  const router = useRouter();

  const { data, error, isLoading } = useQuery({
    queryKey: ['checkRole', desiredRole],
    queryFn: async () => await checkRole(desiredRole),

    // @ts-ignore
    onError: () => {
      if (cancelDestination) {
        router.push(cancelDestination);
      } else {
        console.error('No access.Without redirect');
      }
    },
  });

  if (isLoading) return 'Загрузка...'; // Или показывайте индикатор загрузки

  if (error || !data?.props?.access) {
    if (cancelDestination) {
      router.push(cancelDestination);
    } else {
      console.error('Access Error');
    }

    return false;
  }

  return true;
};

export default useRole;
