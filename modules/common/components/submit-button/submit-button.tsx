import React, { FunctionComponent } from 'react';
import { useFormContext } from '~/common/providers';
import Button, { ButtonProps } from '../button';

const SubmitButton: FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  const { submitting } = useFormContext();

  return (
    <Button
      isLoading={submitting}
      colorScheme="messenger"
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
