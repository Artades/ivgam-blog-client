import PostPreview from '@/components/PostPreview/PostPreview';
import { Metadata, ResolvingMetadata } from 'next/types';
import React from 'react';
import * as Actions from '@/actions';

type Props = {
  params: { postId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.postId;

  const previousImages = (await parent).openGraph?.images || [];
  const post = await Actions.posts.getPostById(id);

  return {
    title: post.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const id = params.postId;
  const post = await Actions.posts.getPostById(id);

  return (
    <div>
    <PostPreview post={post} />
  </div>
  )
}
