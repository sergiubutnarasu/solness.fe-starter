import React, { FunctionComponent } from 'react';
import { ICON_CONFIG } from '../../configs';
import { IconType } from '../../types';
import { Icon as ChakraIcon, IconProps } from '@chakra-ui/react';

type Props = IconProps & {
  icon?: IconType;
};

const Icon: FunctionComponent<Props> = ({ icon, fontSize = 16, ...props }) => {
  if (!icon) {
    return null;
  }

  const IconComponent = ICON_CONFIG[icon];

  return <ChakraIcon fontSize={fontSize} as={IconComponent} {...props} />;
};

export default Icon;
