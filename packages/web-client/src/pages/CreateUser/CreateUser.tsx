import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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

const buttonName = "Create";

export const CreateUser: React.FC = () => {
  const { isLoading, err: addUserError, asyncFunc: addUser, res: response } = useAsyncFn( userApi.addUser );
  const form = useForm<UserForm>({
    mode: "onChange",
  });
  const { register, handleSubmit, watch } = form;

  watch();

  const onSubmit = async ( userData: AddNewUserParams ) => {
    await addUser( userData );
  };

  const isAddUserError = Boolean( addUserError );

  return (
    <div className='user-page__container'>
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
                  {...register( item.name as keyof UserForm, {
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
                  type: "submit",
                }}
              >
                {buttonName}
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
        {!isLoading && response && !isAddUserError && <Typography variant='h3'>User Created Successfully</Typography>}
        {isAddUserError && <Typography variant='h3'>Something Went wrong, Try Again</Typography>}
      </FormProvider>
    </div>
  );
};
