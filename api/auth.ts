"use server";

import axios from '@/http/axios';
import { LoginFormDTO, LoginResponseDTO, RegisterFormDTO, RegisterResponseDTO } from '@/types/auth.interface';

export const login = async (
  credentials: LoginFormDTO,
): Promise<LoginResponseDTO> => {
  return (await axios.post('/auth/signIn', credentials, {withCredentials: true})).data;
};

export const register = async (
  credentials: RegisterFormDTO,
): Promise<RegisterResponseDTO> => {
  return (await axios.post('/auth/signUp', credentials, {withCredentials: true})).data;
};
