import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import Button, { ButtonProps } from '../button';

const SubmitButton: FunctionComponent<ButtonProps> = ({
  children,
  isLoading,
  ...props
}) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      isLoading={isLoading || isSubmitting}
      disabled={isLoading || isSubmitting}
      colorScheme="purple"
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
