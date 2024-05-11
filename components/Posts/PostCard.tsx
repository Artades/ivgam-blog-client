import { PostItemProps } from '@/types/post.interface';
import React, { FC } from 'react';

interface PostCardProps {
  data: PostItemProps;
}
const PostCard: FC<PostCardProps> = ({ data }) => {
  return (
    <div className={`w-full h-full rounded-lg border border-zinc-700 `}>
      <div className={`w-full flex flex-col justify-center gap-7 items-start p-10`}>
        <h3 className="text-2xl font-bold  ">{data.title}</h3>
        <p className='text-md tracking-tight'>{data.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
