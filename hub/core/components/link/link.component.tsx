import { LinkProps } from '@chakra-ui/react';
import { Box, ColorType } from '@solness/ui';
import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';

export type Props = LinkProps & {
  href: string;
  as?: 'div' | 'span' | 'a';
  color?: ColorType;
};

const Link: FunctionComponent<Props> = ({
  as = 'a',
  children,
  href,
  color,
}) => (
  <NextLink href={href}>
    <Box background="transparent" as={as} color={color}>
      {children}
    </Box>
  </NextLink>
);

export default Link;
