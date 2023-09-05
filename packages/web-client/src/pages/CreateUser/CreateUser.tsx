import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AddNewUserParams, userApi } from "api";
import { useAsyncFn } from "hooks/useAsync";
import { PageURL } from "router/pageURL";
import { UserForm } from "utils/types";
import { createFormModel } from "utils/types/common/formMapping";

import { FormTextField } from "components/atoms/FormTextField";
import { LoadingButton } from "components/atoms/LoadingButton";

import "./style.scss";

export const CreateUser = ({ buttonName = "Create" }: any ) => {
  const { isLoading, asyncFunc: addUser } = useAsyncFn( userApi.addUser );
  const navigate = useNavigate();
  const form = useForm<UserForm>({
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

  const onSubmit = async ( userData: AddNewUserParams ) => {
    await addUser( userData );
    navigate( PageURL.ROOT );
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
                  {...register( item.name  as keyof UserForm, {
                    ...item.rhfProps,
                  })}
                  textFieldProps={item.tfProps}
                />
              </Grid>
            ) )}
            <Grid item xs={12} alignItems={"center"}>
              <LoadingButton
                isLoading={isLoading}
                buttonProps={{
                  variant: "contained",
                  type: "submit"
                }}>
                {buttonName}
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};
