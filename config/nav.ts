import { BsHouseFill, BsHeartFill, BsImage } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export const items = [
  {
    icon: BsHouseFill,
    label: 'Посты',
    href: '/posts',
  },
  
  {
    icon: FaUser,
    label: 'Профиль',
    href: `/profile`,
    auth: true,
  },
  {
    icon: BsImage,
    label: 'Изображения',
    href: '/images',
    devMode: true,
    auth: true,
  },
];
