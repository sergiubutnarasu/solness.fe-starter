import React, { forwardRef, FunctionComponent } from 'react';
import { Box as Component, BoxProps } from '@chakra-ui/react';

export type Props = BoxProps;

const Box = forwardRef<HTMLDivElement, Props>(
  ({ children, bg = 'white', ...props }, ref) => (
    <Component ref={ref} bg={bg} {...props}>
      {children}
    </Component>
  ),
);

export default Box;
