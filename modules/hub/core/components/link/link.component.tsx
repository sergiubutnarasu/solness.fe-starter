import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';

export interface Props {
  href: string;
  target?: string;
}

const Link: FunctionComponent<Props> = ({ children, href }) => (
  <NextLink href={href}>
    <a>{children}</a>
  </NextLink>
);

export default Link;
