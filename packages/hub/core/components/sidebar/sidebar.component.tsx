import { Box } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import CalendarWidget from '../calender-widget';
import TeamWidget from '../team-widget';

const Sidebar: FunctionComponent = () => (
  <Box bgColor="transparent" w="18rem">
    <CalendarWidget />
    <TeamWidget />
  </Box>
);

export default Sidebar;
