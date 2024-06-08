'use client';
import * as Api from '@/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ClipLoader } from 'react-spinners';
import * as z from 'zod';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
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
import ImageInput from './FormUI/ImageInput';
import { CreatePostDTO } from '@/types/post.interface';
import { useRouter } from 'next/navigation';

const createFormSchema = z.object({
  topic: z.string().min(4, {
    message: 'Укажите топик поста.Минимум 4 символа',
  }),
  title: z.string().min(4, {
    message: 'Укажите заголовок вашей идеи.Минимум 4 символа',
  }),
  body: z.string().min(20, {
    message: 'Подробно опишите вашу идею.Минимум 20 символов',
  }),
  hashtags: z.array(z.string()).optional(),
  image: z.any().optional(),
});

export function CreatePostForm() {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hashtags, setHashtags] = useState<string[]>([]);

  const createForm = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      topic: '',
      title: '',
      body: '',
      hashtags: [],
    },
  });

  useEffect(() => {
    createForm.setValue('hashtags', hashtags);
  }, [hashtags, createForm]);

  const handleHashtagsChange = (updatedHashtags: string[]) => {
    setHashtags(updatedHashtags);
  };
  const handleImageChange = (file: File) => {
    createForm.setValue('image', file);
  };

  const handleCreatePost = async (
    credentials: z.infer<typeof createFormSchema>,
  ) => {
    try {
      setLoading(true);

      const hashtagsString: string | undefined =
        credentials.hashtags?.join(',');

      const updatedCredentials = {
        ...credentials,
        hashtags: hashtagsString ?? '',
      };

      const response = await Api.posts.createPost(updatedCredentials);
      console.log(response)
      // Reset the form
      createForm.reset();
      setHashtags([]);

      router.push("/posts")
      
    } catch (error: any) {
      console.log(error)
      showErrorToast('Что-то пошло не так при создании поста');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...createForm}>
      <form
        onSubmit={createForm.handleSubmit(handleCreatePost)}
        className="space-y-4 py-10 px-5 "
      >
        <FormField
          control={createForm.control}
          disabled={isLoading}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Изображение</FormLabel>
              <FormControl>
                <ImageInput onImageChange={handleImageChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={createForm.control}
          disabled={isLoading}
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
          control={createForm.control}
          disabled={isLoading}
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
          disabled={isLoading}
          control={createForm.control}
          name="body"
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
          disabled={isLoading}
          control={createForm.control}
          name="hashtags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Хэштеги</FormLabel>
              <FormControl>
                <HashtagInput
                  initialHashtags={hashtags}
                  onUpdate={handleHashtagsChange}
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
        </div>
      </form>
    </Form>
  );
}
