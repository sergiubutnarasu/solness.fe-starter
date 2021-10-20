import React, { FunctionComponent } from 'react';
import { Box as Component, BoxProps } from '@chakra-ui/react';

export type Props = BoxProps;

const Box: FunctionComponent<Props> = ({ children, bg = 'white', ...props }) => (
  <Component bg={bg} {...props}>
    {children}
  </Component>
);

export default Box;
