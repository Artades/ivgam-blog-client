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
