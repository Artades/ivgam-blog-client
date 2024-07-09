import { BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';

const profileBreadcrumbs = {
  items: [
    { id: 1, name: 'Избранные', href: '/favorites' },
    { id: 2, name: 'Посты', href: '/posts', },
    { id: 3, name: 'Профиль', href: '/profile', current: true },
  ],
} as BreadCrumbsProps;

export { profileBreadcrumbs };
