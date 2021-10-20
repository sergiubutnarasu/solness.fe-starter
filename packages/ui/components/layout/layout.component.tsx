import React, { FunctionComponent, ReactNode } from 'react';
import Box from '../box';

export interface Props {
  children: ReactNode;
  menu?: ReactNode;
  sidebar?: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children, menu, sidebar }) => (
  <Box display="flex" width="full" bgColor="gray.100">
    {menu && <Box>{menu}</Box>}
    <Box bgColor="transparent" display="flex" flex={1} p={10}>
      <Box bgColor="transparent" flex={1}>
        {children}
      </Box>
      {sidebar && <Box pl={10} bgColor="transparent">{sidebar}</Box>}
    </Box>
  </Box>
);

export default Layout;
