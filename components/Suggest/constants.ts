import { BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';

const suggestBreadcrumbs = {
  items: [
    { id: 1, name: 'Посты', href: '/posts' },
    { id: 2, name: 'Предложить пост', href: '/suggest', current: true },
  ],
} as BreadCrumbsProps;

export {suggestBreadcrumbs}
