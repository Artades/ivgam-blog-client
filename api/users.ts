import axios from '@/http/axios';
import { UserProps } from '@/types/user.interface';

export const getUserById = async (userId: number): Promise<UserProps> => {
  return (await axios.get(`/users/findOneById/${userId}`, {withCredentials: true})).data;
};

export const updateProfilePicture = async (
  id: number,
  profilePicture: string,
): Promise<{ success: boolean }> => {
  return (await axios.patch(`/users/profilePicture/`, { id, profilePicture }))
    .data;
};

export const getActiveUsers = async (): Promise<UserProps[]> => {
  return (await axios.get(`/users/activeUsers`)).data;
};
