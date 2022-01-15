import React, { FunctionComponent } from 'react';
import { ColorType, IconType } from '../../types';
import Button from '../button';
import Icon from '../icon';

type Props = {
  isActive?: boolean;
  icon?: IconType;
  iconColor?: ColorType;
};

const MenuItem: FunctionComponent<Props> = ({
  children,
  icon,
  iconColor,
  isActive,
}) => (
  <Button
    pl={6}
    mb={1}
    size="lg"
    justifyContent="start"
    variant="ghost"
    width="full"
    color="blue.800"
    fontWeight="semibold"
    fontSize="xs"
    bgColor={isActive ? 'gray.100' : undefined}
    leftIcon={<Icon icon={icon} fontSize="20px" color={iconColor} />}
  >
    {children}
  </Button>
);

export default MenuItem;
