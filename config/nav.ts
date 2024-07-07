import { BsHouseFill, BsHeartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export const items = [
  {
    icon: BsHouseFill,
    label: 'Посты',
    href: '/posts',
  },
  {
    icon: BsHeartFill,
    label: 'Избранные',
    href: '/notifications',
    auth: true,
  },
  {
    icon: FaUser,
    label: 'Профиль',
    href: `/users/`,
    auth: true,
  },
];
