import { Form as AntForm, FormProps } from 'antd';
import React, { FunctionComponent } from 'react';
import { useFormContext } from '~/common/providers';
import CancelButton from '../cancel-button';
import SubmitButton from '../submit-button';

export interface CompoundProps {
  Item: typeof AntForm.Item;
  CancelButton: typeof CancelButton;
  SubmitButton: typeof SubmitButton;
}

const Form: FunctionComponent<FormProps> & CompoundProps = ({
  children,
  layout = 'vertical',
  onFinish,
  ...props
}) => {
  const { setSubmitting } = useFormContext();

  const handleFinish = (values: any) => {
    setSubmitting(true);
    onFinish(values);
  };

  return (
    <AntForm {...props} layout={layout} onFinish={handleFinish}>
      {children}
    </AntForm>
  );
};

Form.Item = AntForm.Item;
Form.CancelButton = CancelButton;
Form.SubmitButton = SubmitButton;

export default Form;
