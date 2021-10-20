import { IconButton as Component, IconButtonProps } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import { IconType } from '../../types';
import Icon from '../icon';

export type Props = Omit<IconButtonProps, 'icon'> & {
  icon: IconType;
  iconSize?: number;
};

const IconButton: FunctionComponent<Props> = ({
  icon,
  iconSize,
  fontSize = 'sm',
  children,
  ...props
}) => (
  <Component
    fontSize={fontSize}
    _focus={{ outline: 'none' }}
    icon={<Icon icon={icon} fontSize={iconSize} />}
    {...props}
  >
    {children}
  </Component>
);

export default IconButton;
