"use client";

import React, { useEffect, useCallback } from 'react';
import Markdown from 'react-markdown';
import Wrapper from '../Layout/Wrapper/Wrapper';
import Helmet from '../Helmet/Helmet';
import { createBreadcrumbs } from '../CreatePost/constants';
import styles from './PostPreview.module.css';
import remarkGfm from 'remark-gfm';
import { PostItemProps } from '@/types/post.interface';
import PreviewBillboard from './PreviewBillboard/PreviewBillboard';
import * as Api from "@/api"
import PostComments from './PostComments/PostComments';
import useAuthentication from '@/hooks/useAuth';

interface PostPreviewProps {
  post: PostItemProps;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {

  useAuthentication(`/posts/${post.id}`);

  const markdown = post.body;

  const viewPost = useCallback(async () => {
    try {
      await Api.posts.viewPost(post.id);
    } catch (error) {
      console.error('Error viewing post:', error);
    }
  }, [post.id]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      viewPost();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [viewPost]);

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
        <PostComments postId={post.id} />
      </div>
    </>
  );
};

export default PostPreview;
