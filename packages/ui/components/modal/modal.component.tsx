import { FunctionComponent } from 'react';
import {
  Modal as Component,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps as Props,
} from '@chakra-ui/react';

type CompoundType = {
  Overlay: typeof ModalOverlay;
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
  Body: typeof ModalBody;
  Close: typeof ModalCloseButton;
};

const Modal: FunctionComponent<Props> & CompoundType = ({
  children,
  ...props
}) => (
  <Component {...props}>
    <ModalOverlay />
    {children}
  </Component>
);

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = ModalBody;
Modal.Close = ModalCloseButton;

export default Modal;
