import axios from '@/http/axios';
import { CreatePostDTO, PostItemProps } from '@/types/post.interface';
import { SuggestDTO } from '@/types/suggest.interface';

export const suggest = async (
  credentials: SuggestDTO,
): Promise<{ success: boolean }> => {
  return (await axios.post('/posts/suggestPost', credentials)).data;
};

export const getAllPosts = async (): Promise<PostItemProps[]> => {
  return (await axios.get(`/posts/getAll`, { withCredentials: true })).data;
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

export const viewPost = async (postId: number): Promise<{ success: true }> => {
  try {
    const response = await axios.patch(`/posts/view/${postId}`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error viewing post: ' + error);
  }
};
export const createPost = async (
  credentials: CreatePostDTO,
): Promise<{ success: boolean }> => {
  const formData = new FormData();
  formData.append('image', credentials.image);
  formData.append('topic', credentials.topic);
  formData.append('title', credentials.title);
  formData.append('body', credentials.body);
  formData.append('hashtags', credentials.hashtags);
  formData.append('creator', credentials.creator);

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true
  };


  return (await axios.post(`/posts/createPost`, formData, config)).data;
};
