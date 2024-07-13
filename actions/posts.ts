"use server";
import { API_URL } from '.';

export const getPostById = async (postId: string) => {
  const res = await fetch(`${API_URL}/posts/${postId}`, {
    credentials: 'include'
  });

  return res.json();
};
