"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Api from "@/api";
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreateCommentDto } from '@/types/comment.interface';
import { Button } from '@/components/ui/button';
import ClipLoader from 'react-spinners/ClipLoader';
import { showErrorToast } from '@/components/Error/showErrorToast';

const commentFormSchema = z.object({

  comment: z.string().min(2, {
    message: 'Комментарий должен быть длиннее 2 символов',
  }),
});

interface CommentInputProps {
  postId: number,
  userId: number,
  setUpdate: Dispatch<SetStateAction<boolean>>
}
const CommentInput: FC<CommentInputProps> = ({ postId, userId, setUpdate }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const commentForm = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),

    defaultValues: {
      comment: '',
    },
  });

  const handleCommentPost = async (credentials: z.infer<typeof commentFormSchema>) => {
    try {
      const updatedCredentials: CreateCommentDto = {
        postId,
        body: credentials.comment,
        userId
      }
      setLoading(true);
      await Api.comments.createComment(updatedCredentials);

      commentForm.reset();
      setUpdate(true)
    } catch (error: any) {
      showErrorToast("Ошибка при создании комментария")
      console.log("Ошибка при создании комментария", error)
    } finally {
      setLoading(false);
    }
  };
  return (

    <Form {...commentForm}>
      <form
        onSubmit={commentForm.handleSubmit(handleCommentPost)}
        className="space-y-2 border border-y  text-lg py-5 px-5 "
      >

        <FormField
          control={commentForm.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <Textarea className='rounded-lg  bg-transparent outline-none resize-none' placeholder='Введите комментарий' {...field} />

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
              'Опубликовать'
            )}
          </Button>
          
        </div>
      </form>
    </Form>

  );
};

export default CommentInput;