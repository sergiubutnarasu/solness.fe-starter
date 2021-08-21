import { createContext, useContext } from 'react';

type FormContextProps = {
  submitting: boolean;
  setSubmitting: (value: boolean) => void;
};

const FormContext = createContext<FormContextProps>({
  submitting: false,
  setSubmitting: () => {
    throw new Error('setSubmitting is not implemented');
  },
});

export const useFormContext = () => useContext(FormContext);

export default FormContext;
