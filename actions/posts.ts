'use server';

export const getPostById = async (
  postId: string
) => {
  const res = await fetch(`http://localhost:4000/api/posts/${postId}`);
    
  return res.json();
};
