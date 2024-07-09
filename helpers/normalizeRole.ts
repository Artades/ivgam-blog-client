import { ReactElement } from 'react';
import { HiStar } from 'react-icons/hi';
import { FaBookReader } from "react-icons/fa";

export const normalizeRole = (role: string) => {
  let roleData: { role: string; Icon: React.ElementType | null } = { role: '', Icon: null };

  switch (role) {
    case 'author':
      roleData = { role: 'Автор', Icon: HiStar };
      break;

    case 'reader':
      roleData = { role: 'Читатель', Icon: FaBookReader };
      break;
  }

  return roleData;
};
