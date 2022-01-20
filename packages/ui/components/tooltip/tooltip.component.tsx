import { PlacementWithLogical, Tooltip as Component } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Box, { Props as BoxProps } from '../box';

type Props = BoxProps & {
  label?: ReactNode;
  placement?: PlacementWithLogical;
};

const Tooltip = ({ children, label, placement = 'auto', ...props }: Props) => (
  <Component hasArrow placement={placement} label={label}>
    <Box background="transparent" {...props}>
      {children}
    </Box>
  </Component>
);

export default Tooltip;
