import { Box as Component, BoxProps } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

export interface Props extends BoxProps {}

const Box = forwardRef<HTMLDivElement, Props>(
  ({ children, bg = 'white', ...props }, ref) => (
    <Component ref={ref} bg={bg} {...props}>
      {children}
    </Component>
  ),
);

export default Box;
