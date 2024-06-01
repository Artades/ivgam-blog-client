import axios from '@/http/axios';
import { PostItemProps } from '@/types/post.interface';
import { SuggestDTO } from '@/types/suggest.interface';

export const suggest = async (
  credentials: SuggestDTO,
): Promise<{ success: boolean }> => {
  return (await axios.post('/posts/suggestPost', credentials)).data;
};

export const getAllPosts = async (): Promise<PostItemProps[]> => {
  return (await axios.get(`/posts/getAll`)).data;
};

export const likePost = async (
  postId: number,
  userId: number,
): Promise<{ success: boolean }> => {
  return (await axios.post(`/posts/${postId}/addToFavorites/${userId}`)).data;
};

export const unlikePost = async (
  postId: number,
  userId: number,
): Promise<{ success: boolean }> => {
  return (await axios.delete(`/posts/${postId}/removeFromFavorites/${userId}`))
    .data;
};

export const getPostById = async (postId: number): Promise<PostItemProps> => {
  return (await axios.get(`/posts/${postId}`)).data;
};