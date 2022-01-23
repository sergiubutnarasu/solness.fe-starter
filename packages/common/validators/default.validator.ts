type Props = {
  name: string;
  isRequired?: boolean;
  maxLength?: number;
};

export const defaultValidators = ({ name, isRequired, maxLength }: Props) => ({
  required: {
    value: Boolean(isRequired),
    message: `The ${name} field is required.`,
  },
  maxLength: maxLength && {
    value: maxLength,
    message: `Max length exceeded. (${maxLength})`,
  },
});
