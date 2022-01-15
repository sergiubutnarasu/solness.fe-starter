import {
  Alert as Component,
  AlertIcon,
  AlertProps as Props,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type CompoundProps = {
  Icon: typeof AlertIcon;
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
};

const Alert: FunctionComponent<Props> & CompoundProps = ({
  children,
  ...props
}) => <Component {...props}>{children}</Component>;

Alert.Icon = AlertIcon;
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export default Alert;
