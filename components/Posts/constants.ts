import { BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';

const postsBreadcrumbs = {
  items: [
    {id: 1, name: "Главная", href: "/"},
    { id: 2, name: 'Посты', href: '/posts', current: true },
    { id: 3, name: 'Преложить пост', href: '/suggest', },
  ],
} as BreadCrumbsProps;

export {postsBreadcrumbs}
