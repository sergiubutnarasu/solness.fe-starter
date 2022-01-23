import { Tag as Component, TagProps as Props } from '@chakra-ui/react';
import React from 'react';

export const Tag = ({ children, fontSize = 'sm', ...props }: Props) => (
  <Component fontSize={fontSize} {...props}>
    {children}
  </Component>
);

export default Tag;
