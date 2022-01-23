import { Textarea as Component, TextareaProps } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

export type Props = TextareaProps;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ fontSize = 'sm', ...props }: Props, ref) => (
    <Component ref={ref} fontSize={fontSize} {...props} />
  ),
);

export default Textarea;
