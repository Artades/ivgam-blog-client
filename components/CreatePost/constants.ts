import { BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';

const createBreadcrumbs = {
  items: [
    { id: 1, name: 'Посты', href: '/posts' },
    { id: 2, name: 'Создать пост', href: '/create', current: true },
  ],
} as BreadCrumbsProps;

export { createBreadcrumbs };
