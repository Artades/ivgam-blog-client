// helpers/checkRole.js

import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export const checkRole = (desiredRole: string) => {
  const role = useSelector((state: RootState) => state.user.role);
  return role === desiredRole;
};
