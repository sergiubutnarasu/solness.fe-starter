import { Tooltip as Component, TooltipProps as Props } from '@chakra-ui/react';
import Box from '../box';

const Tooltip = ({ children, ...props }: Props) => (
  <Component {...props} placement="auto">
    <Box background="transparent" display="flex" alignItems="center">
      {children}
    </Box>
  </Component>
);

export default Tooltip;
