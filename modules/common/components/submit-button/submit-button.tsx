import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import Button, { ButtonProps } from '../button';

const SubmitButton: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      isLoading={isSubmitting}
      disabled={isSubmitting}
      colorScheme="purple"
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
