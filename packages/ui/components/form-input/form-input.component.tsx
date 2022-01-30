import { defaultValidators } from '@solness/common';
import React, { FunctionComponent, ReactNode } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import FormField from '../form-field';
import Input, { Props as InputProps } from '../input';

export type Props = InputProps & {
  name: string;
  validators?: Partial<RegisterOptions>;
  label?: ReactNode;
  hint?: ReactNode;
  maxLength?: number;
};

const FormInput: FunctionComponent<Props> = ({
  name,
  isRequired,
  maxLength,
  minLength,
  validators,
  label,
  hint,
  mb = 4,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <FormField
      name={name}
      label={label}
      isRequired={isRequired}
      hint={hint}
      mb={mb}
    >
      <Input
        {...props}
        {...register(name, {
          ...defaultValidators({ name, isRequired, minLength, maxLength }),
          ...validators,
        })}
      />
    </FormField>
  );
};

export default FormInput;
