import {
  GridItem as Component,
  GridItemProps as Props,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const GridItem: FunctionComponent<Props> = ({ children, ...props }) => (
  <Component {...props}>{children}</Component>
);

export default GridItem;
