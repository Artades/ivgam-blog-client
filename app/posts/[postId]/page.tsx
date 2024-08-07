import PostPreview from '@/components/PostPreview/PostPreview';
import { Metadata, ResolvingMetadata } from 'next/types';
import React from 'react';
import * as Actions from '@/actions';
import Script from 'next/script';
const IMAGE_API = process.env.api_url;

type Props = {
  params: { postId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.postId;

  const post = await Actions.posts.getPostById(id);

  const metaTitle = `${post.title} | Ivgam Blog`;
  const metaDescription = `Читать пост ${post.title} в блоге Ivgam. Читайте и предлагайте свои собственные статьи.`;

  const metaImage = `${IMAGE_API}${post.imageUrl}`;
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      url: `https://ivgamblogserver.online/posts/${id}`,
      siteName: 'Ivgam Blog',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const id = params.postId;
  const post = await Actions.posts.getPostById(id);
  const metaDescription = `Здесь я делюсь своими историями, идеями и приключениями. Но что еще круче – вы тоже можете стать частью этого процесса! Предложите свою идею для статьи, и мы с удовольствием воплотим ее в жизнь`;
  const metaImage = `${IMAGE_API}${post.imageUrl}`;

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: metaDescription,
    image: [metaImage],
    author: {
      '@type': 'Person',
      name: 'Artyom Galay',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ivgam Blog',
      logo: {
        '@type': 'ImageObject',
        url: '/vercel.svg', // Replace with your logo URL
      },
    },
    datePublished: post.dateOfCreation,
    dateModified: post.dateOfUpdation || post.dateOfCreation,
  });

  return (
    <>
      <PostPreview post={post} />
      <Script
        strategy="beforeInteractive"
        type="application/ld+json"
        id="json-ld"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  );
}
