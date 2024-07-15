import { BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';

const createBreadcrumbs = {
  items: [
    // { id: 1, name: 'Профиль', href: '/' },
    { id: 2, name: 'Посты', href: '/posts' },
    { id: 3, name: 'Создать пост', href: '/create', current: true },
  ],
} as BreadCrumbsProps;

export { createBreadcrumbs };
