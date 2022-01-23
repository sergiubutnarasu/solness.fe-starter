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
      _last={{ mb: 0 }}
    >
      <Input
        {...props}
        {...register(name, {
          required: {
            value: Boolean(isRequired),
            message: `The ${name} field is required.`,
          },
          maxLength: maxLength && {
            value: maxLength,
            message: `Max length exceeded. (${maxLength})`,
          },
          ...validators,
        })}
      />
    </FormField>
  );
};

export default FormInput;
