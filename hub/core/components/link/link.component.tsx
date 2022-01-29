import { BoxProps } from '@chakra-ui/react';
import { Box, ColorType } from '@solness/ui';
import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';

export type Props = BoxProps & {
  href: string;
  as?: 'div' | 'span' | 'a';
  color?: ColorType;
};

const Link: FunctionComponent<Props> = ({
  as = 'a',
  children,
  href,
  color,
  ...props
}) => (
  <NextLink href={href}>
    <Box
      background="transparent"
      cursor="pointer"
      as={as}
      color={color}
      {...props}
    >
      {children}
    </Box>
  </NextLink>
);

export default Link;
