import React from 'react';
import Markdown from 'react-markdown';
import Wrapper from '../Layout/Wrapper/Wrapper';
import Helmet from '../Helmet/Helmet';
import { createBreadcrumbs } from '../CreatePost/constants';
import styles from './PostPreview.module.css';
import remarkGfm from 'remark-gfm';

import { PostItemProps } from '@/types/post.interface';

interface PostPreviewProps {
  post: PostItemProps;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const markdown = post.body
  return (
    <div>
      <Helmet pageTitle="Пост" breadCrumbs={createBreadcrumbs} />
      <Wrapper>
        <div className="w-full min-h-screen relative">
          <div className="max-w-full  top-0 left-0 right-0 overflow-hidden">
            <img
              src={`http://localhost:4000/api${post.imageUrl}`}
              alt={post.title}
              className="w-full h-[25rem] object-cover brightness-50"
            />
          </div>

          <div className={styles.markdownBody}>
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PostPreview;
