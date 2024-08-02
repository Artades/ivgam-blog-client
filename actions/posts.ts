"use server";
const API_URL = process.env.prod_api;

export const getPostById = async (postId: string) => {
  const res = await fetch(`${API_URL}/posts/${postId}`, {
    credentials: 'include',
    next: {
      revalidate: 0
    }
  });

  return res.json();
};
