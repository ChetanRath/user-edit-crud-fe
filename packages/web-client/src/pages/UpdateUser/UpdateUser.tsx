import React, { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { UpateUserParams, userApi } from "api";
import { useAsyncFn } from "hooks/useAsync";
import { useEffectOnce } from "hooks/useEffectOnce";
import { PageURL } from "router/pageURL";
import { UserForm } from "utils/types";
import { updateFormModel } from "utils/types/common/formMapping";

import { FormTextField } from "components/atoms/FormTextField";
import { LoadingButton } from "components/atoms/LoadingButton";

import "./style.scss";

export const UpdateUser = ({ buttonName = "Update" }: any ) => {
  const searchParams = useParams();
  const { res: userData, asyncFunc: getUserDetail } = useAsyncFn( userApi.getUserDetail );
  const { isLoading: isUpdateLoading, asyncFunc: updateUser } = useAsyncFn( userApi.updateUser );

  const defaults = useMemo( () => {
    if( userData ) {
      return {
        first_name: userData.first_name,
        last_name: userData.last_name,
        address: userData.address,
        email: userData.email,
        nickname: userData.nickname,
        phoneNumber: userData.phoneNumber
      };
    }
  }, [ userData ] );


  const form = useForm<UserForm>({
    mode: "onChange",
    defaultValues: defaults
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = form;

  useEffectOnce( () => {
    searchParams?.userId && getUserDetail( searchParams.userId );
  });

  useEffect( () => form.reset( defaults ), [ defaults ] );

  watch();

  const onSubmit = ( data: UpateUserParams ) => {
    searchParams?.userId && updateUser({ ...data, userId: searchParams.userId });
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
            {updateFormModel.map( ( item, index ) => (
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
                isLoading={isUpdateLoading}
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
