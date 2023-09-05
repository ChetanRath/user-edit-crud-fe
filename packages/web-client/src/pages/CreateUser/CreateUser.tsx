import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { PageURL } from "router/pageURL";
import { createFormModel } from "utils/types/common/formMapping";

import { FormTextField } from "components/atoms/FormTextField";

import "./style.scss";

export const CreateUser = ({ buttonName = "Create" }: any ) => {
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
      <Box sx={{ display: "flex" }}>
        <Typography variant='h4'> {`${buttonName} user`} </Typography>
        <Link className='update-user__link link__common' to={PageURL.BASE}>
          Back To Home
        </Link>
      </Box>
      <FormProvider {...form}>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit( onSubmit )();
          }}
          className='form__container'
        >
          <Grid container rowSpacing={4} columnSpacing={{ xs: 3 }}>
            {createFormModel.map( ( item, index ) => (
              <Grid item xs={12} md={6} key={index}>
                <FormTextField
                  {...register( item.name, {
                    ...item.rhfProps,
                  })}
                  textFieldProps={item.tfProps}
                />
              </Grid>
            ) )}
            <Grid item xs={12} alignItems={"center"}>
              <Button variant='contained' type='submit'>
                {buttonName}
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};
