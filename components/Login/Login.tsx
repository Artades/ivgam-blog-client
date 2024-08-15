'use client';
import * as Api from '@/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ClipLoader } from 'react-spinners';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { showErrorToast } from '../Error/showErrorToast';
import Link from 'next/link';
import useAuthentication from '@/hooks/useAuth';

const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Email должен быть валидным',
  }),
  password: z.string().min(2, {
    message: 'Введите валидный пароль.',
  }),
});

export function Login() {
  useAuthentication();
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (credentials: z.infer<typeof loginFormSchema>) => {
    try {
      setLoading(true);
      let res = await Api.auth.login(credentials);

      console.log(res);

      router.push('/posts');

      loginForm.reset();
    } catch (error: any) {
      if (error.response) {
        // Ошибка с ответом от сервера (HTTP-код не 2xx)
        if (error.response.status === 400) {
          showErrorToast('Пользователь не существует в базе данных');

          // Дополнительные действия при ошибке 400
        } else if (error.response.status === 401) {
          showErrorToast('Неверный логин или пароль');
        } else {
          showErrorToast('Необработанная ошибка сервера');
        }
      } else if (error.request) {
        // Запрос был сделан, но нет ответа
        showErrorToast('Нет ответа от сервера');
      } else {
        // Общие ошибки
        console.log('Неизвестная ошибка', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100dvh] flex items-center justify-center">
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(handleLogin)}
          className="w-full space-y-4 max-w-md gap-4 border bg-zinc-950/70 p-6 rounded-lg sm:mx-0 mx-5"
        >
          <h2 className="text-2xl text-pretty font-bold text-white">Войти</h2>
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input className="" placeholder="Email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Пароль</FormLabel> */}
                <FormControl>
                  <Input
                    type="password"
                    className=""
                    placeholder="Пароль"
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
                'Войти'
              )}
            </Button>
            <div className="text-sm text-gray-400">
              Еще нет аккаунта?{' '}
              <Link href="/auth/register" className="text-zinc-600 underline">
                Создать
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
