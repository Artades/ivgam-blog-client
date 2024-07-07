"use client";

import React, { FC, useEffect, useState } from 'react';
import CommentInput from './CommentInput';
import * as Api from "@/api";
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import CommentItem from './CommentItem';
import Wrapper from '@/components/Layout/Wrapper/Wrapper';

interface PostCommentsProps {
    postId: number;
}
const PostComments: FC<PostCommentsProps> = ({ postId }) => {
    const [update, setUpdate] = useState<boolean>(false);
    const { id } = useSelector((state: RootState) => state.user);
    console.log(id)

    const { data, isError, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => Api.comments.getAllComments(postId),
    });

    const comments = data ?? [];


    useEffect(() => {
        refetch().then(() => {
            setUpdate(false);
        })
    }, [update, refetch])

    return (
        <section id='postComments' className='w-full bg-zinc-950'>
            <Wrapper>
                <h2 className='text-2xl px-6 py-5'>Комментарии ({comments.length})</h2>
            </Wrapper>
            <CommentInput postId={postId} userId={id} setUpdate={setUpdate} />
            <div className='w-full flex flex-col items-center'>
                {
                    comments.map((comment) => (
                        <CommentItem key={comment.id} user={comment.user} body={comment.body} likes={comment.likesCount} />
                    ))
                }
            </div>
        </section>
    );
};

export default PostComments;