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
import { openEditModal, closeEditModal } from '@/store/slices/editModalSlice';
import { X } from 'lucide-react';
import * as z from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
import { PostItemProps } from '@/types/post.interface';
import HashtagInput from '../CreatePost/FormUI/HashtagInput';
import MdEditorCustom from '../CreatePost/MDEditor/MdEditorCustom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { topics } from '@/types/topic.type';

const editFormSchema = z.object({
  topic: z.string().min(4, {
    message: 'Укажите топик поста.Минимум 4 символа',
  }),
  title: z.string().min(4,{
    message: 'Заголовок поста не должен быть коротким',
  }),
  body: z.string().min(20, {
    message: 'Подробно опишите вашу идею.Минимум 20 символов',
  }),
  hashtags: z.array(z.string()).optional(),
});

interface EditModalProps {
  post: PostItemProps;
}
export function EditModal({ post }: EditModalProps) {
  const editForm = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),

    defaultValues: {
      title: post.title,
      body: post.body,
      topic: post.topic,
      hashtags: post.hashtags.split(','),
    },
  });
  const dispatch = useDispatch();
  const { isEditModalOpened } = useSelector(
    (state: RootState) => state.editModal,
  );

  const [isLoading, setLoading] = useState<boolean>(false);
  const [hashtags, setHashtags] = useState<string[]>([...post.hashtags.split(",")]);
  const router = useRouter();

  useEffect(() => {
    editForm.setValue('hashtags', hashtags);
  }, [hashtags, editForm]);

  const handleHashtagsChange = (updatedHashtags: string[]) => {
    setHashtags(updatedHashtags);
    editForm.setValue('hashtags', updatedHashtags);
  };

  const handleEdit = async (credentials: z.infer<typeof editFormSchema>) => {
    try {
      setLoading(true);
      const hashtagsString: string | undefined =
        credentials.hashtags?.join(',');

      const updatedCredentials = {
        ...credentials,
        hashtags: hashtagsString ?? '',
        postId: post.id,
      };
      let res = await Api.posts.editPost(updatedCredentials);

      console.log(res);

      dispatch(closeEditModal());
      router.refresh();
      editForm.reset();
    } catch (error: any) {
      console.log(error);
      showErrorToast('Что-то пошло не так при редактировании поста');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={isEditModalOpened}
      onOpenChange={() => dispatch(openEditModal())}
    >
      <DialogContent className="w-full overflow-y-auto">
        <DialogHeader>
          <div
            onClick={() => dispatch(closeEditModal())}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
          <DialogTitle>Редактировать пост</DialogTitle>
          <DialogDescription>
            Отредактируйте пост и сохраните изменения
          </DialogDescription>
        </DialogHeader>
        <Form {...editForm}>
          <form
            onSubmit={editForm.handleSubmit(handleEdit)}
            className="space-y-4  overflow-y-auto h-[500px] scrollbar-track-zinc-800 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full  border-neutral-800"
          >
            <FormField
              control={editForm.control}
              disabled={isLoading}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Топик поста</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className=" bg-transparent">
                        <SelectValue placeholder="Выберите топик" defaultValue={post.topic} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(topics).map(
                          ([key, { value, color }]) => (
                            <SelectItem key={key} value={key}>
                              {value}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={editForm.control}
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
              control={editForm.control}
              name="body"
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel className="text-xl">Описание</FormLabel>
                  <FormControl className='h-[200px] ' >
                    <MdEditorCustom field={field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isLoading}
              control={editForm.control}
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
                  'Изменить'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
