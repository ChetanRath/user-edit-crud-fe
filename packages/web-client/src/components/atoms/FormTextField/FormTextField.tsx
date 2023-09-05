import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

import { FormTextFieldProps } from "./types";

export const FormTextField: React.FC<FormTextFieldProps> = ({ defaultValue = "", name, rules, textFieldProps }) => {
  const { control } = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      rules={rules}
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const isError = !!fieldState.error;

        return (
          <TextField
            variant='outlined'
            InputLabelProps={{ shrink: true }}
            value={field.value === undefined || field.value === null ? "" : field.value}
            fullWidth
            error={isError}
            helperText={fieldState.error?.message}
            onChange={( event: React.ChangeEvent<HTMLInputElement> ) => {
              const newValue = textFieldProps?.type === "number" ? Number( event.target.value ) : event.target.value;

              field.onChange( newValue );
            }}
            inputRef={field.ref}
            {...{
              ...textFieldProps,
              InputProps: {
                ...textFieldProps?.InputProps,
              },
            }}
          />
        );
      }}
    />
  );
};
