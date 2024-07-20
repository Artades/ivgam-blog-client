import { UserProps } from '@/types/user.interface';
import { API_URL } from '.';



export const getPopularHashtags = async (): Promise<string[]> => {
 
  const res = await fetch(`${API_URL}/posts/popularHashtags`, {
    cache: "force-cache",
  });

  return res.json();
};

export const getActiveUsers = async (): Promise<UserProps[]> => {
  const res = await fetch(`${API_URL}/users/activeUsers`, {
    cache: 'force-cache',
  });

  return res.json();
};
