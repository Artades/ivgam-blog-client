'use client';
import * as Api from '@/api';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClipLoader } from 'react-spinners';
import { RootState } from '@/store';
import {
  closeLoginModal,
  openLoginModal,
} from '@/store/slices/authModalsSlice';
import { X } from 'lucide-react';
import * as z from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import Link from 'next/link';
import { setAccessToken } from '@/helpers/cookies';
import { showErrorToast } from '../Error/showErrorToast';
import { Textarea } from '../ui/textarea';
import { openSuccessModal } from '@/store/slices/successModalSlice';

const suggestFormSchema = z.object({
  title: z.string().min(4, {
    message: 'Укажите заголовок вашей идеи.Минимум 4 символа',
  }),
  description: z.string().min(20, {
    message: 'Подробно опишите вашу идею.Минимум 20 символов',
  }),
});

export function SuggestForm() {
  const dispatch = useDispatch();
  const { isLoginModalOpened } = useSelector(
    (state: RootState) => state.loginModal,
  );

  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const suggestForm = useForm<z.infer<typeof suggestFormSchema>>({
    resolver: zodResolver(suggestFormSchema),

    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleSuggest = async (
    credentials: z.infer<typeof suggestFormSchema>,
  ) => {
    try {
      setLoading(true);
      let userEmailFromLocalStorage: string | null = '';
      if (typeof window !== 'undefined')
        userEmailFromLocalStorage = localStorage.getItem('userEmail');

      const updatedCredentials = {
        ...credentials,
        userEmail: userEmailFromLocalStorage as string,
      };
      const response: { success: boolean } =
        await Api.posts.suggest(updatedCredentials);

      localStorage.setItem('suggestions', credentials.title);

      dispatch(openSuccessModal());
      suggestForm.reset();
    } catch (error: any) {
      showErrorToast('Что-то пошло не так при создании заявки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...suggestForm}>
      <form
        onSubmit={suggestForm.handleSubmit(handleSuggest)}
        className="space-y-4 py-10 px-5 "
      >
        <FormField
          control={suggestForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Название</FormLabel>
              <FormControl>
                <Input className="" placeholder="Название поста" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={suggestForm.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Описание</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[400px] resize-none"
                  placeholder="Описание вашего поста"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-start gap-y-4">
          <Button
            disabled={isLoading}
            type={'submit'}
            className={
              isLoading
                ? 'bg-transparent border  text-white border-white flex items-center gap-x-5 '
                : 'default'
            }
          >
            {isLoading ? (
              <div className="flex items-center gap-x-3">
                Загрузка
                <ClipLoader size={20} color="#fff" />
              </div>
            ) : (
              'Отправить'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
