import React, { FunctionComponent, ReactNode } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import FormField from '../form-field';
import Input, { Props as InputProps } from '../input';

export type Props = InputProps & {
  name: string;
  validators?: Partial<RegisterOptions>;
  label?: ReactNode;
  hint?: ReactNode;
};

const FormInput: FunctionComponent<Props> = ({
  name,
  isRequired,
  validators,
  label,
  hint,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <FormField name={name} label={label} isRequired={isRequired} hint={hint}>
      <Input
        {...props}
        {...register(name, {
          required: {
            value: Boolean(isRequired),
            message: `The ${name} field is required.`,
          },
          ...validators,
        })}
      />
    </FormField>
  );
};

export default FormInput;
