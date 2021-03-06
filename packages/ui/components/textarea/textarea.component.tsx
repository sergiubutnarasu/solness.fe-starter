import { Textarea as Component, TextareaProps } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

export interface Props extends TextareaProps {}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ fontSize = 'sm', ...props }: Props, ref) => (
    <Component
      ref={ref}
      fontSize={fontSize}
      _focus={{ borderColor: 'gray.500' }}
      {...props}
    />
  ),
);

export default Textarea;
