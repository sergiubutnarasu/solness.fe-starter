import { User } from '@solness/generated-types';
import { ColorType, IconType } from '@solness/ui';
import { Page } from './enums';

export type MenuField = {
  description: string;
  path: string;
  icon: IconType;
  iconColor: ColorType;
  identifier?: Page;
};

export type AppUser = Pick<User, 'id' | 'firstName' | 'lastName' | 'title'>;

export type HubContextProps = {
  user?: AppUser;
  setUser: (user: AppUser) => void;
};
