import axios from "@/http/axios"
import { UserProps } from "@/types/user.interface";

export const getPopularHashtags = async (): Promise<string[]> => {
  try {
    const { data } = await axios.get<string[]>(
      `/posts/popularHashtags`,
      {
        headers: {
          'Cache-Control': 'public, max-age=31536000', // Опционально для кэширования
        },
      },
    );
    return data;
  } catch (error) {
    console.error('Error fetching popular hashtags:', error);
    throw error;
  }
};

export const getActiveUsers = async (): Promise<UserProps[]> => {
  try {
    const { data } = await axios.get<UserProps[]>(
      `/users/activeUsers`,
      {
        headers: {
          'Cache-Control': 'public, max-age=31536000', // Опционально для кэширования
        },
      },
    );
    return data;
  } catch (error) {
    console.error('Error fetching active users:', error);
    throw error;
  }
};
