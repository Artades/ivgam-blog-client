'use client';

import React, { useEffect, useCallback } from 'react';
import Markdown from 'react-markdown';
import Wrapper from '../Layout/Wrapper/Wrapper';
import Helmet from '../Helmet/Helmet';
import styles from './PostPreview.module.css';
import remarkGfm from 'remark-gfm';
import { PostItemProps } from '@/types/post.interface';
import PreviewBillboard from './PreviewBillboard/PreviewBillboard';
import * as Api from '@/api';
import PostComments from './PostComments/PostComments';
import useAuthentication from '@/hooks/useAuth';
import { Breadcrumbs } from '@/helpers/breadCrumbs';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
interface PostPreviewProps {
  post: PostItemProps;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  useAuthentication(`/posts/${post.id}`);
  const { id, role } = useSelector((state: RootState) => state.user);
  const breadCrumbs = new Breadcrumbs(
    `posts/${post.id}`,
    role,
    id,
  ).generateBreadcrumbs();

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
     
      <Helmet pageTitle="Пост"   breadCrumbs={{items: [...breadCrumbs]}} />
      <div className="w-full">
        <PreviewBillboard
         post={post}
        />
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
