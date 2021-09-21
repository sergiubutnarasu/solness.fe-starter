import NextLink from 'next/link';
import { Link as Component, LinkProps as Props } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

const Link: FunctionComponent<Props> = ({ children, href, ...props }) => (
  <NextLink href={href}>
    <Component {...props}>{children}</Component>
  </NextLink>
);

export default Link;
