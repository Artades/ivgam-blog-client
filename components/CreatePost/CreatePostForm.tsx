'use client';
import * as Api from '@/api';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClipLoader } from 'react-spinners';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
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
import { showErrorToast } from '../Error/showErrorToast';
import { Textarea } from '../ui/textarea';
import { openSuccessModal } from '@/store/slices/successModalSlice';
import HashtagInput from './FormUI/HashtagInput';

const suggestFormSchema = z.object({
  topic: z.string().min(4, {
    message: 'Укажите топик поста.Минимум 4 символа',
  }),
  title: z.string().min(4, {
    message: 'Укажите заголовок вашей идеи.Минимум 4 символа',
  }),
  description: z.string().min(20, {
    message: 'Подробно опишите вашу идею.Минимум 20 символов',
  }),
  hastags: z.any(),
  image: z.any(),
});

export function CreatePostForm() {
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [hashtags, setHashtags] = useState<string[]>([]);

  const handleHashtagsChange = (updatedHashtags: string[]) => {
    setHashtags(updatedHashtags);
  };
  const suggestForm = useForm<z.infer<typeof suggestFormSchema>>({
    resolver: zodResolver(suggestFormSchema),

    defaultValues: {
      topic: '',
      title: '',
      description: '',
      hastags: [],
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

      await Api.posts.suggest(updatedCredentials);

      const suggestions: string | null = localStorage.getItem('suggestions');
      let suggestionArray: string[] | undefined = suggestions?.split(',');
      if (suggestions && suggestionArray && suggestionArray.length) {
        suggestionArray.push(credentials.title);
        localStorage.setItem('suggestions', suggestionArray.join(','));
      } else {
        localStorage.setItem('suggestions', credentials.title);
      }

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
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Топик поста</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  className=" bg-transparent"
                  placeholder="Придумайте топик для поста: технологии, природа, медицина"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={suggestForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Название</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  className=" bg-transparent"
                  placeholder="Название поста"
                  {...field}
                />
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
                  disabled={isLoading}
                  className="min-h-[400px] resize-none  bg-transparent"
                  placeholder="Описание вашего поста"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={suggestForm.control}
          name="hastags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Хэштеги</FormLabel>
              <FormControl>
                <HashtagInput onUpdate={(hashtags) => handleHashtagsChange(hashtags)} />
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
