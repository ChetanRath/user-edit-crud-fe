import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Grid } from "@mui/material";
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
      <h1> User details </h1>
      <FormProvider {...form}>
        <form
          onSubmit={e => {
            e.preventDefault();
            // handleSubmit(onSubmit)();
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <FormTextField
                {...register( "firstName", {
                  required: "First Name is required",
                })}
                textFieldProps={{ placeholder: "Your First Name" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField
                {...register( "lastName", {
                  required: "Last Name is required",
                })}
                textFieldProps={{ placeholder: "Your Last Name" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField {...register( "nickname" )} textFieldProps={{ placeholder: "Your nickname" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField {...register( "address" )} textFieldProps={{ placeholder: "Enter your address" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField {...register( "phoneNumber" )} textFieldProps={{ placeholder: "Enter your Phone No." }} />
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};
