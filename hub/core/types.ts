import { ColorType, IconType } from '@solness/ui';
import { Page } from './enums';

export type MenuField = {
  description: string;
  path: string;
  icon: IconType;
  iconColor: ColorType;
  identifier?: Page;
};
