import { Page } from './enums';
import { MenuField } from './types';

export const ROUTES: MenuField[] = [
  { description: 'Dashboard', path: '/', icon: 'home', iconColor: 'blue.500' },
  {
    description: 'Organization',
    identifier: Page.Company,
    path: '/organization',
    icon: 'office',
    iconColor: 'orange.500',
  },
  {
    description: 'Members',
    identifier: Page.User,
    path: '/members',
    icon: 'users',
    iconColor: 'purple.500',
  },
  {
    description: 'Cash Register',
    identifier: Page.Cash,
    path: '/cash',
    icon: 'calculator',
    iconColor: 'indigo',
  },
  {
    description: 'Inventory',
    identifier: Page.Inventory,
    path: '/inventory',
    icon: 'briefcase',
    iconColor: 'red.500',
  },
];
