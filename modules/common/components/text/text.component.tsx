import React, { FunctionComponent } from 'react';
import { Text as Component, TextProps as Props } from '@chakra-ui/react';

const Text: FunctionComponent<Props> = ({
  children,
  fontSize = 'sm',
  ...props
}) => (
  <Component fontSize={fontSize} {...props}>
    {children}
  </Component>
);

export default Text;
