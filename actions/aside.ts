import { UserProps } from '@/types/user.interface';
import { API_URL } from '.';



export const getPopularHashtags = async (): Promise<string[]> => {
 
  const res = await fetch(`${API_URL}/posts/popularHashtags`, {
    cache: 'no-cache',
  });

  return res.json();
};

export const getActiveUsers = async (): Promise<UserProps[]> => {
  const res = await fetch(`${API_URL}/users/activeUsers`, {
    cache: 'no-cache',
  });

  return res.json();
};
