import { MenuField } from './types';

export const ROUTES: MenuField[] = [
  { description: 'Dashboard', path: '/', icon: 'home', iconColor: 'blue.500' },
  { description: 'Users', path: '/users', icon: 'users', iconColor: 'purple.500' },
  {
    description: 'Offices',
    path: '/offices',
    icon: 'office',
    iconColor: 'orange.500',
  },
  {
    description: 'Documents',
    path: '/documents',
    icon: 'documents',
    iconColor: 'teal.500',
  },
  {
    description: 'Inventory',
    path: '/inventory',
    icon: 'briefcase',
    iconColor: 'red.500',
  },
  {
    description: 'Calendar',
    path: '/calendar',
    icon: 'calendar',
    iconColor: 'indigo',
  },
];
