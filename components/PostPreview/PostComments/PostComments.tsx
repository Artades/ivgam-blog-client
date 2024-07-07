'use client';

import React, { FC, useEffect, useState } from 'react';
import CommentInput from './CommentInput';
import * as Api from '@/api';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import CommentItem from './CommentItem';
import Wrapper from '@/components/Layout/Wrapper/Wrapper';
import LoadMoreButton from './LoadMoreButton';
import CommentItemSkeleton from './CommentItemSkeleton';

interface PostCommentsProps {
  postId: number;
}
const PostComments: FC<PostCommentsProps> = ({ postId }) => {
  const [page, setPage] = useState<number>(1);
  const [update, setUpdate] = useState<boolean>(false);
  const { id } = useSelector((state: RootState) => state.user);

  const dto = { postId, page };
  const { data, isFetching, isFetched, refetch } = useQuery({
    queryKey: ['comments'],
    queryFn: async () => Api.comments.getAllComments(dto),
  });

  const comments = data?.comments ?? [];
  const commentsAmount = data?.amount ?? 0;

  useEffect(() => {
    refetch().then(() => {
      setUpdate(false);
    });
  }, [update, refetch, page]);
  

  return (
    <section id="postComments" className="w-full bg-zinc-950">
      <Wrapper>
        <h2 className="text-2xl px-6 py-5">Комментарии ({commentsAmount})</h2>

        <CommentInput postId={postId} userId={id} setUpdate={setUpdate} />
        {isFetched && (
          <div className="w-full flex flex-col items-center">
            {comments.map((comment) => (
              <CommentItem
                key={comment.id}
                user={comment.user}
                body={comment.body}
                likes={comment.likesCount}
              />
            ))}
          </div>
        )}
        <div className="w-full flex flex-col items-center">
          {isFetching && (
            <div className="w-full">
              {Array.from({ length: 5 }).map((_, index) => (
                <CommentItemSkeleton key={index} />
              ))}
            </div>
          )}
        </div>
        {(commentsAmount !== comments.length || comments.length === 0) &&  <LoadMoreButton setPage={setPage} />}
       
      </Wrapper>
    </section>
  );
};

export default PostComments;
