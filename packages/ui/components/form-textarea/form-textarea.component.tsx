import { defaultValidators } from '@solness/common';
import React, { ReactNode } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import FormField from '../form-field';
import Textarea, { Props as TextareaProps } from '../textarea';

export type Props = TextareaProps & {
  name: string;
  validators?: Partial<RegisterOptions>;
  label?: ReactNode;
  hint?: ReactNode;
  maxLength?: number;
};

const FormTextarea = ({
  name,
  isRequired,
  maxLength,
  validators,
  label,
  hint,
  mb = 4,
  ...props
}: Props) => {
  const { register } = useFormContext();

  return (
    <FormField
      name={name}
      label={label}
      isRequired={isRequired}
      hint={hint}
      mb={mb}
    >
      <Textarea
        {...props}
        {...register(name, {
          ...defaultValidators({ name, isRequired, maxLength }),
          ...validators,
        })}
      />
    </FormField>
  );
};

export default FormTextarea;
