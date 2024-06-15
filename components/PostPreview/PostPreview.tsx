"use client";

import React from 'react';
import Markdown from 'react-markdown';
import Wrapper from '../Layout/Wrapper/Wrapper';
import Helmet from '../Helmet/Helmet';
import { createBreadcrumbs } from '../CreatePost/constants';
import styles from './PostPreview.module.css';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { PostItemProps } from '@/types/post.interface';
import { Button } from '../ui/button';
import Date from "../Posts/PostAction/Date"
import PreviewBillboard from './PreviewBillboard/PreviewBillboard';

interface PostPreviewProps {
  post: PostItemProps;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  const markdown = post.body;
   

  return (
    <>
      <Helmet pageTitle="Пост" breadCrumbs={createBreadcrumbs} />
      <div className="w-full min-h-screen">
        <PreviewBillboard title={post.title} imageUrl={post.imageUrl} date={post.dateOfCreation} hashtags={post.hashtags} />
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
