'use client';
import * as Api from "@/api";
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
  FormMessage,
} from '../ui/form';
import Link from 'next/link';
import { setAccessToken } from "@/helpers/cookies";
import { showErrorToast } from "../Error/showErrorToast";

const loginFormSchema = z.object({
  email: z.string().min(4, {
    message: 'Email должен быть валидным',
  }),
  password: z.string().min(2, {
    message: 'Пароль должен содержать как минимум 2 символа.',
  }),
});

export function LoginModal() {
  const dispatch = useDispatch();
  const { isLoginModalOpened } = useSelector(
    (state: RootState) => state.loginModal,
  );

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
     const response = await Api.auth.login(credentials);
     const token = response.accessToken;
     const email = response.userEmailFromToken;

     localStorage.setItem('userEmail', email);
     setAccessToken(token);

     router.push('/posts');
     dispatch(closeLoginModal())
     loginForm.reset()
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
   }finally{
    setLoading(false);
   }
 };

  return (
    <Dialog
      open={isLoginModalOpened}
      onOpenChange={() => dispatch(openLoginModal())}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div
            onClick={() => dispatch(closeLoginModal())}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
          <DialogTitle>Войти</DialogTitle>
          <DialogDescription>
            Для того, чтобы читать статьи вам необходимо войти в аккаунт или
            создать его
          </DialogDescription>
        </DialogHeader>
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(handleLogin)}
            className="space-y-4"
          >
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input
                      className="text-zinc-700"
                      placeholder="Email"
                      {...field}
                    />
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
                      className="text-zinc-700"
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
