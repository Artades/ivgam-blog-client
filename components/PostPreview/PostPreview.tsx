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
        <div className="max-w-full z-[] sticky top-0 left-0 right-0 overflow-hidden">
          <img
            src={`http://localhost:4000/api${post.imageUrl}`}
            alt={post.title}
            className="w-full h-[25rem] object-cover brightness-50 "
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Published:</span> {post.dateOfCreation}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Updated:</span> {post.dateOfUpdation}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Topic:</span> {post.topic}
            </p>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <div className="flex items-center justify-between text-gray-600">
              <span>{post.views} Views</span>
              <span>{post.likesAmount} Likes</span>
            </div>
            <div className="mt-4">
              <span className="font-semibold text-gray-900">Hashtags:</span> {post.hashtags}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
    </div>
   
  );
};

export default PostPreview;
