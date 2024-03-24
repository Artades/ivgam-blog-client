import { toast } from '../ui/use-toast';

export const showErrorToast = (message: string) => {
  toast({
    duration: 5000,
    variant: 'destructive',
    title: 'Что-то пошло не так',
    description: message,
  });
};
