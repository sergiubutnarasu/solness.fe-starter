import { Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

export interface Props {
  name: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  type?: string;
  validators?: Partial<RegisterOptions>;
}

const Input: FunctionComponent<Props> = ({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  validators,
}) => {
  const { register, errors } = useFormContext();

  return (
    <div className="mb-6">
      {label && (
        <label className="block text-gray-600 text-xs font-medium mb-2">
          {label}
        </label>
      )}
      <input
        className="px-3 py-3 w-full text-gray-700 text-sm leading-none appearance-none border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-100"
        type={type}
        name={name}
        placeholder={placeholder}
        ref={register({
          required: { value: required, message: "This field is required" },
          ...validators,
        })}
      />
      {errors?.[name] && (
        <div className="pt-1">
          <Typography size="xsmall" color="red">
            {errors?.[name]?.message}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Input;
