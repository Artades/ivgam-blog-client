import { current } from '@reduxjs/toolkit';

export class Breadcrumbs {
  constructor(
    readonly page: string,
    readonly userRole: string,
    readonly userId: number,
  ) {
    this.page = page;
    this.userRole = userRole;
    this.userId = userId;
  }

  public generateBreadcrumbs() {
    const baseBreadcrumbs = [
      { id: 1, name: 'Главная', href: '/',  },
      {
        id: 2,
        name: 'Профиль',
        href: `/profile/${this.userId}`,
        current: this.page === 'profile' 
      },
      { id: 3, name: 'Посты', href: '/posts', current: this.page === 'posts/' },
    ];

    if (this.userRole === 'author') {
      baseBreadcrumbs.push({
        id: 4,
        name: 'Создать пост',
        href: '/create',
        current: this.page === 'create',
      });
    } else if (this.userRole === 'reader') {
      baseBreadcrumbs.push({
        id: 5,
        name: 'Предложить пост',
        href: '/suggest',
        current: this.page === 'suggest',
      });
    }

    return baseBreadcrumbs.map((item) => {
      return { ...item, current: item.href === `/${this.page}` };
    });
  }
}
