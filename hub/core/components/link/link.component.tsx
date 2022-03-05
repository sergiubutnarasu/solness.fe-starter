import { BoxProps } from '@chakra-ui/react';
import { Box, ColorType } from '@solness/ui';
import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';

export interface Props extends BoxProps {
  href: string;
  as?: 'div' | 'span' | 'a';
  color?: ColorType;
  passHref?: boolean;
}

const Link: FunctionComponent<Props> = ({
  as = 'a',
  children,
  href,
  color,
  passHref = true,
  ...props
}) => (
  <NextLink passHref={passHref} href={href}>
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
