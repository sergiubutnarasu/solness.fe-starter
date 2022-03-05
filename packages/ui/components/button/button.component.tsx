import { Button as Component, ButtonProps } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';
import IconButton from '../icon-button';

type CompoundProps = {
  Icon: typeof IconButton;
};

export interface Props extends ButtonProps {}

const Button: FunctionComponent<Props> & CompoundProps = ({
  fontSize = 'sm',
  fontWeight = 'normal',
  children,
  ...props
}) => (
  <Component
    fontSize={fontSize}
    fontWeight={fontWeight}
    _focus={{ outline: 'none' }}
    {...props}
  >
    {children}
  </Component>
);

Button.Icon = IconButton;

export default Button;
