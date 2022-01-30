import { ReactNode } from 'react';
import {
  FieldValues,
  useFormContext,
  UseFormReturn,
  useWatch,
} from 'react-hook-form';

type Props = {
  name: string[];
  children: (
    data: string[],
    options: UseFormReturn<FieldValues, object>,
  ) => ReactNode | void;
};

const FormWatchOn = ({ name, children }: Props) => {
  const context = useFormContext();

  const data = useWatch({
    name,
  });

  return <>{children(data, context)}</>;
};

export default FormWatchOn;
