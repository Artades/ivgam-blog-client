import React from 'react';
import Markdown from 'react-markdown';
import Wrapper from '../Layout/Wrapper/Wrapper';
import Helmet from '../Helmet/Helmet';
import { createBreadcrumbs } from '../CreatePost/constants';
import styles from './PostPreview.module.css';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { PostItemProps } from '@/types/post.interface';

interface PostPreviewProps {
  post: PostItemProps;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const markdown = post.body;
  return (
    <>
      <Helmet pageTitle="Пост" breadCrumbs={createBreadcrumbs} />
      <div className="w-full min-h-screen">
        <div className="max-w-full  top-0 left-0 right-0 overflow-hidden">
          <Image
            width={1000}
            height={500}
            quality={100}
            priority
            src={`http://localhost:4000/api${post.imageUrl}`}
            alt={post.title}
            className="w-full h-[25rem] object-cover brightness-50"
          />
        </div>
        <div className="sm:px-5 py-5 px-3">
          <Wrapper>
            <div className={styles.markdownBody}>
              <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default PostPreview;
