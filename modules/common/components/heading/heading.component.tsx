import React, { FunctionComponent } from 'react';
import { Heading as Component, HeadingProps as Props } from '@chakra-ui/react';

const Heading: FunctionComponent<Props> = ({
  children,
  fontWeight = 'normal',
  fontSize = 'lg',
  color = 'blue.900',
  ...props
}) => (
  <Component
    fontWeight={fontWeight}
    color={color}
    fontSize={fontSize}
    {...props}
  >
    {children}
  </Component>
);

export default Heading;
