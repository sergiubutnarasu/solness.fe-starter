import React, { FunctionComponent } from 'react';
import {
  AvatarBadge as Component,
  AvatarBadgeProps as Props,
} from '@chakra-ui/react';

const AvatarBadge: FunctionComponent<Props> = ({ children, ...props }) => (
  <Component {...props}>{children}</Component>
);

export default AvatarBadge;
