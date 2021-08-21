import { FunctionComponent } from 'react';

import { Avatar as Component, AvatarProps as Props } from '@chakra-ui/react';
import AvatarBadge from '../avatar-badge';

type CompoundProps = {
  Badge: typeof AvatarBadge;
};

const Avatar: FunctionComponent<Props> & CompoundProps = ({
  children,
  ...props
}) => <Component {...props}>{children}</Component>;

Avatar.Badge = AvatarBadge;

export default Avatar;
