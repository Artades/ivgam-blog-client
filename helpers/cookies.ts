'use server';

import { cookies } from 'next/headers';

export const burnAuthData = () => {
  cookies().delete('accessToken');
};

