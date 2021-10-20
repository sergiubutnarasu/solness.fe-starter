import NextLink from 'next/link';
import { Link as Component, LinkProps } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

export type Props = LinkProps & {
  href: string;
};

const Link: FunctionComponent<Props> = ({ children, href, ...props }) => (
  <NextLink href={href}>
    <Component {...props}>{children}</Component>
  </NextLink>
);

export default Link;
