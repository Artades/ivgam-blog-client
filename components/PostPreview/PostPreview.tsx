import { PostItemProps } from '@/types/post.interface';
import React, { FC } from 'react';
import Wrapper from '../Layout/Wrapper/Wrapper';
import Helmet from '../Helmet/Helmet';
import { createBreadcrumbs } from '../CreatePost/constants';

interface PostPreviewProps {
  post: PostItemProps;
}
const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <div>
      <Helmet pageTitle="Пост" breadCrumbs={createBreadcrumbs} />
      <Wrapper>
        <div className="w-full min-h-screen  relative">
          <div className="max-w-full sticky top-0 left-0 right-0 overflow-hidden">
            <img
              src={`http://localhost:4000/api${post.imageUrl}`}
              alt={post.title}
              className="w-full h-[25rem] object-cover brightness-50 "
            />
          </div>
          <h1 className="sm:text-6xl text-3xl font-bold text-white">
            {post.title}
          </h1>
        </div>
      </Wrapper>
    </div>
  );
};

export default PostPreview;
