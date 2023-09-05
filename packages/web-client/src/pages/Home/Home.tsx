import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import { EMAIL_VALIDATION_REGEX } from "utils/types/common/constants";

import { FormTextField } from "components/atoms/FormTextField";

import "./style.css";

export const Home = () => {
  const [ isUpdate, setisUpdate ] = useState( false );
  const form = useForm({
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = form;

  watch();

  console.log( "asasasas", getValues() );

  const onSubmit = ( data: any ) => {
    console.log( "877779700000", data );
  };

  return (
    <div className='home__container'>
      <h1> Update user details </h1>
      <FormProvider {...form}>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit( onSubmit )();
          }}
        >
          <Grid container rowSpacing={4} columnSpacing={{ xs: 3 }}>
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
                textFieldProps={{ placeholder: "Enter your email", disabled: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField {...register( "nickname" )} textFieldProps={{ placeholder: "Your nickname" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField {...register( "address" )} textFieldProps={{ placeholder: "Enter your address" }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField
                {...register( "phoneNumber", {
                  maxLength: 13,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Enter valid Ph No.",
                  },
                })}
                textFieldProps={{ placeholder: "Enter your Phone No." }}
              />
            </Grid>
            <Grid item xs={12} alignItems={"center"}>
              <Button variant='contained' type='submit'>
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};
