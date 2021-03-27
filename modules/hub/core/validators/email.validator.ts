import { ValidationRule } from "react-hook-form";

type EmailValidatorType = {
  pattern: ValidationRule<RegExp>;
};

export const EmailValidator: EmailValidatorType = {
  pattern: {
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Invalid email address",
  },
};
