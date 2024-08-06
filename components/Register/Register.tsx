'use client';

import * as Api from '@/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ClipLoader } from 'react-spinners';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link
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
import useAuthentication from '@/hooks/useAuth';

const registerFormSchema = z.object({
  first_name: z.string().min(1, {
    message: 'Имя невалидно',
  }),
  last_name: z.string().min(1, {
    message: 'Фамилия невалидна',
  }),
  email: z.string().email({
    message: 'Email должен быть валидным',
  }),
  password: z
    .string()
    .min(4, {
      message: 'Пароль должен содержать как минимум 4 символа.',
    })
    .regex(/(?=.*[A-Z])(?=.*\d).{4,}/, {
      message:
        'Пароль должен содержать хотя бы одну заглавную букву и одну цифру.',
    }),
});

export function Register() {
  
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
  });

  const handleRegister = async (
    credentials: z.infer<typeof registerFormSchema>,
  ) => {
    try {
      setLoading(true);
      const { first_name, last_name, ...restCredentials } = credentials;
      const fullName: string = `${first_name} ${last_name}`;
      const updatedCredentials = { ...restCredentials, name: fullName };
      console.log(registerForm.getValues());

      await Api.auth.register(updatedCredentials);

      router.push('/profile-picture');
      registerForm.reset();
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          showErrorToast('Пользователь с таким email уже существует');
        } else {
          showErrorToast('Необработанная ошибка сервера');
        }
      } else if (error.request) {
        showErrorToast('Нет ответа от сервера');
      } else {
        console.log('Неизвестная ошибка', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[100dvh] flex items-center justify-center">
      <Form {...registerForm}>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            registerForm.handleSubmit(handleRegister);
          }}
          className="w-full space-y-4 max-w-md gap-4 border bg-zinc-950/70 p-6 rounded-lg sm:mx-0 mx-5"
        >
          <h2 className="text-2xl text-pretty font-bold text-white">
            Создать аккаунт
          </h2>
          <div className="flex space-x-2 w-full">
            <FormField
              control={registerForm.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Фамилия" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Пароль" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col items-start gap-y-4">
            <Button
              disabled={isLoading}
              type="submit"
              className={
                isLoading
                  ? 'bg-transparent border text-white border-white flex items-center gap-x-5'
                  : 'default'
              }
            >
              {isLoading ? (
                <div className="flex items-center gap-x-3">
                  Загрузка
                  <ClipLoader size={20} color="#fff" />
                </div>
              ) : (
                'Создать'
              )}
            </Button>
            <div className="text-sm text-gray-400">
              Уже есть аккаунт?{' '}
              <Link href="/auth/login" className="text-zinc-600 underline">
                Войти
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
