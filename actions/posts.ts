"use server";

export const getPostById = async (postId: string) => {
  const res = await fetch(`http://localhost:4000/api/posts/${postId}`, {
    credentials: 'include'
  });

  return res.json();
};
