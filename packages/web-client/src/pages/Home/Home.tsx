import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { EMAIL_VALIDATION_REGEX } from "utils/types/common/constants";

import { FormTextField } from "components/atoms/FormTextField";

export const Home = () => {
  const form = useForm({
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;
  return (
    <div>
      <FormProvider {...form}>
        <form
          onSubmit={e => {
            e.preventDefault();
            // handleSubmit(onSubmit)();
          }}
        >
          <FormTextField
            {...register( "email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_VALIDATION_REGEX,
                message: "Invalid email address",
              },
            })}
            textFieldProps={{ placeholder: "Enter your email" }}
          />
        </form>
      </FormProvider>
    </div>
  );
};
