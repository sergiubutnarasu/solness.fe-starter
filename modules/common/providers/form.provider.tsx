import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/lib/config-provider';
import React, { FunctionComponent, useCallback, useState } from 'react';
import FormContext from './form.context';

const FormProvider: FunctionComponent<ConfigProviderProps> = ({
  children,
  form = { requiredMark: 'optional' },
  ...props
}) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmittingChange = useCallback(
    (value: boolean) => {
      setSubmitting(value);
    },
    [setSubmitting],
  );

  return (
    <ConfigProvider form={form} {...props}>
      <FormContext.Provider
        value={{ submitting, setSubmitting: handleSubmittingChange }}
      >
        {children}
      </FormContext.Provider>
    </ConfigProvider>
  );
};

export default FormProvider;
