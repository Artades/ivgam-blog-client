"use server";
import { API_URL } from '.';

export const getPostById = async (postId: string) => {
  const res = await fetch(`${API_URL}/posts/${postId}`, {
    credentials: 'include',
    next: {
      revalidate: 0
    }
  });

  return res.json();
};
