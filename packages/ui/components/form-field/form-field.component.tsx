import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormControlProps,
} from '@chakra-ui/form-control';
import React, { FunctionComponent, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

export interface Props extends Omit<FormControlProps, 'label'> {
  name: string;
  children: ReactNode;
  label?: ReactNode;
  hint?: ReactNode;
}

const FormField: FunctionComponent<Props> = ({
  name,
  children,
  label,
  hint,
  isRequired,
  ...props
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl
      id={name}
      isInvalid={errors[name]?.message}
      _last={{ mb: 0 }}
      {...props}
    >
      {label && (
        <FormLabel fontSize="sm" fontWeight="normal" color="blue.900">
          {label} {!isRequired && <>(optional)</>}
        </FormLabel>
      )}

      {children}

      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>

      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
};

export default FormField;
