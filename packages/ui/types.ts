import { ColorProps, Colors } from '@chakra-ui/react';
import { Icon } from './enums';

export type IconType = keyof typeof Icon;

export type IconProps = {
  size?: string | number;
  color?: string;
};

export type ColorType = ColorProps['color'];
