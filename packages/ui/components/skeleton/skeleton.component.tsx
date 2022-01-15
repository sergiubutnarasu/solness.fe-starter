import {
  Skeleton as Component,
  SkeletonProps as Props,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type CompoundProps = {
  Circle: typeof SkeletonCircle;
  Text: typeof SkeletonText;
};

const Skeleton: FunctionComponent<Props> & CompoundProps = ({
  children,
  ...props
}) => <Component {...props}>{children}</Component>;

Skeleton.Circle = SkeletonCircle;
Skeleton.Text = SkeletonText;

export default Skeleton;
