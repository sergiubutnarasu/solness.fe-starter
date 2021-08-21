import React, { FunctionComponent } from 'react';
import { useFormContext } from '~/common/providers';
import Button, { ButtonProps } from '../button';

const CancelButton: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  const { submitting } = useFormContext();

  return (
    <Button disabled={submitting} variant="ghost" {...props}>
      {children}
    </Button>
  );
};

export default CancelButton;
