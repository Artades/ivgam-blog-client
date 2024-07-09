import { BreadCrumbsProps } from '../BreadCrumbs/BreadCrumbs';

const postsBreadcrumbs = {
  items: [
    // {id: 1, name: "Главная", href: "/"},
    { id: 1, name: 'Посты', href: '/posts', current: true },
    { id: 2, name: 'Избранные', href: '/favorites'},
    { id: 3, name: 'Предложить пост', href: '/suggest', },
  ],
} as BreadCrumbsProps;

export {postsBreadcrumbs}
