import { UserProps } from '@/types/user.interface';
import { API_URL } from '.';

export const getUserById = async (userId: number): Promise<UserProps> => {
  const res = await fetch(`${API_URL}/users/findOneById/${userId}`, {
    credentials: 'include',
  });

  return res.json();
};
