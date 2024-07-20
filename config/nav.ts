import { BsHouseFill,  BsImage, BsChatHeart } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export const items = [
  {
    icon: BsHouseFill,
    label: 'Посты',
    href: '/posts',
    unavailable: false,
  },
  
  {
    icon: FaUser,
    label: 'Профиль',
    href: `/profile`,
    auth: true,
    unavailable: false,
  },
  {
    icon: BsImage,
    label: 'Изображения',
    href: '/images',
    unavailable: true,
    auth: true,
  },
];
