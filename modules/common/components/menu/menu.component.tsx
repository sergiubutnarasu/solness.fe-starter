import React, { FunctionComponent } from 'react';
import Box from '../box';
import MenuItem from '../menu-item';

type CompoundType = {
  Item: typeof MenuItem;
};

const Menu: FunctionComponent & CompoundType = ({ children }) => (
  <Box p={6} width={64} height="full" borderRightWidth={1}>
    {children}
  </Box>
);

Menu.Item = MenuItem;

export default Menu;
