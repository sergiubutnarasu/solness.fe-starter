import {
  Input as Component,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/input';
import React, { forwardRef, ReactNode } from 'react';

export interface Props extends Omit<InputProps, 'left' | 'right'> {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { leftElement, rightElement, children, fontSize = 'sm', ...props }: Props,
    ref,
  ) => (
    <InputGroup>
      {leftElement && (
        <InputLeftElement pointerEvents="none" children={leftElement} />
      )}

      <Component
        ref={ref}
        fontSize={fontSize}
        _focus={{ borderColor: 'gray.500' }}
        {...props}
      />

      {rightElement && (
        <InputRightElement pointerEvents="none" children={rightElement} />
      )}
    </InputGroup>
  ),
);

export default Input;
