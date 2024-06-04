"use server"

import { checkAcess } from '@/actions/roles';
import {  getAccessToken, getRole } from './cookies';

interface CheckRoleResponse {
  props?: { access: boolean };
  redirect?: { destination: string; permanent: boolean };
}

export const checkRole = async (
  desiredRole: string,
): Promise<CheckRoleResponse> => {
  const token = await getAccessToken();
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const access = await checkAcess(token, desiredRole);

  console.log('RESPONSE /api/role: ', access);

  if (access.access) {
    return {
      props: {
        
        access: true,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

