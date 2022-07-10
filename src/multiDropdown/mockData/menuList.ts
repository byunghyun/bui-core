import { MenuItemsInterface } from '../types';

export const menuItems: Array<MenuItemsInterface> = [
  {
    title: 'Services',
    submenu: [
      {
        title: 'web design',
      },
      {
        title: 'web development',
        submenu: [
          {
            title: 'Frontend',
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
              },
              {
                title: 'PHP',
              },
            ],
          },
        ],
      },
      {
        title: 'SEO',
      },
    ],
  },
];
