import { ColorProps, Colors } from '@chakra-ui/react';
import { Icon } from './enums';

export type FetchOptions = {
  data?: unknown;
  authorization?: string;
  contentType?: string;
  onComplete?: () => void;
  onError?: (error: unknown) => void;
};

export type IconType = keyof typeof Icon;

export type IconProps = {
  size?: string | number;
  color?: string;
};

export type ColorType = ColorProps['color'];
