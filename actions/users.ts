"use server";

import { UserProps } from '@/types/user.interface';
const API_URL = process.env.prod_api;


export const getUserById = async (userId: number): Promise<UserProps> => {
  const res = await fetch(`${API_URL}/users/findOneById/${userId}`, {
    credentials: 'include',
    cache: "no-cache",
  });
 
  return res.json();
};
