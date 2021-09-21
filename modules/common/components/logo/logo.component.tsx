import React, { FunctionComponent } from 'react';
import Box from '../box';
import Icon from '../icon';
import Typography from '../typography';

const Logo: FunctionComponent = () => (
  <Box display="flex" alignItems="center">
    <Box mr={1}>
      <Icon fontSize="20px" icon="collection" color="purple.500" />
    </Box>

    <Typography.Text color="purple.500" fontSize="xs" fontWeight="semibold">
      solness
    </Typography.Text>
  </Box>
);

export default Logo;
