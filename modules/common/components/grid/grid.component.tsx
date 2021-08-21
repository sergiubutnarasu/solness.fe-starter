import {
  SimpleGrid as Component,
  SimpleGridProps as Props,
} from '@chakra-ui/react';

import React, { FunctionComponent } from 'react';
import GridItem from '../grid-item';

type CompoundProps = {
  Item: typeof GridItem;
};

const Grid: FunctionComponent<Props> & CompoundProps = ({
  columns = 12,
  children,
  ...props
}) => (
  <Component columns={columns} {...props}>
    {children}
  </Component>
);

Grid.Item = GridItem;

export default Grid;
