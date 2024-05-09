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
  FormMessage,
} from '../ui/form';
import Link from 'next/link';
import {
  closeRegisterModal,
  openRegisterModal,
} from '@/store/slices/authModalsSlice';
import { setAccessToken } from '@/helpers/cookies';
import { showErrorToast } from '../Error/showErrorToast';

const registerFormSchema = z.object({
  first_name: z.string().min(3, {
    message: 'Имя невалидно',
  }),
  last_name: z.string().min(1, {
    message: 'Фамилия  невалидна',
  }),
  email: z.string().min(4, {
    message: 'Email должен быть валидным',
  }),
  password: z.string().min(2, {
    message: 'Пароль должен содержать как минимум 2 символа.',
  }),
});

export function RegisterModal() {
  const dispatch = useDispatch();
  const { isRegisterModalOpened } = useSelector(
    (state: RootState) => state.registerModal,
  );

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

      // Adding the "fullName" field to credentials
      const updatedCredentials = { ...restCredentials, name: fullName };
      console.log(registerForm.getValues());

      const response = await Api.auth.register(updatedCredentials);
      const token = response.accessToken;
      const email = response.userEmailFromToken;

      localStorage.setItem('userEmail', email);
      setAccessToken(token);

      dispatch(closeRegisterModal());
      registerForm.reset();
      router.push('/posts');
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          showErrorToast('Пользователь с таким email уже существует');
        } else {
          showErrorToast('Необработанная ошибка сервера');
          // Additional actions for other error codes
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
    <Dialog
      open={isRegisterModalOpened}
      onOpenChange={() => dispatch(openRegisterModal())}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div
            onClick={() => dispatch(closeRegisterModal())}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
          <DialogTitle>Создать аккаунт</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...registerForm}>
          <form
            onSubmit={registerForm.handleSubmit(handleRegister)}
            className="space-y-4"
          >
            <div className="flex space-x-2 w-full ">
              <FormField
                control={registerForm.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input
                      
                        placeholder="Имя"
                        {...field}
                      />
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
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input
                    
                        placeholder="Фамилия"
                        {...field}
                      />
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
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input
                     
                      placeholder="Email"
                      {...field}
                    />
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
                  {/* <FormLabel>Пароль</FormLabel> */}
                  <FormControl>
                    <Input
                    
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
                  'Создать'
                )}
              </Button>
              {/* <div className="flex gap-x-3 ">
                    <Link href={"/forgot-password"} className="">
                      Нет
                    </Link>
                  </div> */}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
