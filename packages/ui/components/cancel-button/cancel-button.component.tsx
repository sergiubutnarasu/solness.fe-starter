import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import Button, { ButtonProps } from '../button';

const CancelButton: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button disabled={isSubmitting} variant="ghost" {...props}>
      {children}
    </Button>
  );
};

export default CancelButton;
