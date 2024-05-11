'use server';

import { cookies } from 'next/headers';




export const getAccessToken = (): Promise<{
  accessToken: string | undefined;
}> => {
  const cookieStore = cookies();
  const _token: any = cookieStore.get('accessToken');
  if (_token) {
    return Promise.resolve({ accessToken: _token.value });
  } else {
    return Promise.resolve({ accessToken: undefined });
  }
};


export const setAccessToken = (token: string) => {
  cookies().set('accessToken', token, {
    secure: true,
    path: '/',
  });
};


export const burnAuthData = () => {
  cookies().delete('accessToken');
  cookies().delete("role")
};


export const  getRole = () => {
  return cookies().get("role");
}

