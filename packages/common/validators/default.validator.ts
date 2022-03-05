interface Props {
  name: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
}

export const defaultValidators = ({
  name,
  isRequired,
  minLength,
  maxLength,
}: Props) => ({
  required: {
    value: Boolean(isRequired),
    message: `The ${name} field is required.`,
  },
  minLength: minLength && {
    value: minLength,
    message: `The ${name} should have at least ${minLength} length`,
  },
  maxLength: maxLength && {
    value: maxLength,
    message: `Max length exceeded. (${maxLength})`,
  },
});
