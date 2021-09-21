import {
  Input as Component,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/input';
import React, { forwardRef, ReactNode } from 'react';

export type Props = Omit<InputProps, 'left' | 'right'> & {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ leftElement, rightElement, children, ...props }: Props, ref) => (
    <InputGroup>
      {leftElement && (
        <InputLeftElement pointerEvents="none" children={leftElement} />
      )}

      <Component ref={ref} {...props} />

      {rightElement && (
        <InputRightElement pointerEvents="none" children={rightElement} />
      )}
    </InputGroup>
  ),
);

export default Input;
