import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import React, { ReactNode } from 'react';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import CancelButton from '../cancel-button';
import FormInput from '../form-input';
import FormTextarea from '../form-textarea';
import SubmitButton from '../submit-button';

export interface CompoundProps {
  Control: typeof FormControl;
  CancelButton: typeof CancelButton;
  ErrorMessage: typeof FormErrorMessage;
  Helper: typeof FormHelperText;
  Input: typeof FormInput;
  Label: typeof FormLabel;
  SubmitButton: typeof SubmitButton;
  Textarea: typeof FormTextarea;
}

export interface Props<TFormValues> {
  defaultValues?: UseFormProps<TFormValues>['defaultValues'];
  children?: ReactNode;
  onSubmit: (values: Partial<TFormValues>) => void;
}

const Form = <TFormValues extends object>({
  defaultValues,
  onSubmit,
  children,
}: Props<TFormValues>) => {
  const methods = useForm<TFormValues>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

Form.Control = FormControl;
Form.CancelButton = CancelButton;
Form.ErrorMessage = FormErrorMessage;
Form.Helper = FormHelperText;
Form.Input = FormInput;
Form.Label = FormLabel;
Form.SubmitButton = SubmitButton;
Form.Textarea = FormTextarea;

export default Form;
