import React, { FunctionComponent } from 'react';
import { Stack as Component, StackProps as Props } from '@chakra-ui/layout';

export const Stack: FunctionComponent<Props> = ({ children, ...props }) => (
  <Component {...props}>{children}</Component>
);

export default Stack;
