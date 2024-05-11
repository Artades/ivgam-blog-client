"use server"
import {  getRole } from './cookies';

export const checkRole = async (desiredRole: string) => {
    const role:any = await getRole();
    ;
  
  try {
    // Check if the user is authenticated based on a cookie key
    if (role.value === desiredRole) {
      return {
        props: {
            role: role.value
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
  } catch (err) {
    console.error('Role analyzing error:', err);

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
