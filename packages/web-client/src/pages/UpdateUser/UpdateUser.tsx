import React, { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { UpateUserParams, userApi } from "api";
import { useAsyncFn } from "hooks/useAsync";
import { useEffectOnce } from "hooks/useEffectOnce";
import { PageURL } from "router/pageURL";
import { UserForm } from "utils/types";
import { updateFormModel } from "utils/types/common/formMapping";

import { FormMapper } from "components/organisms";

import "./style.scss";

const buttonName = "Update";

export const UpdateUser = () => {
  const searchParams = useParams();
  const { res: userData, asyncFunc: getUserDetail, isLoading: isUserDetailLoading } = useAsyncFn( userApi.getUserDetail );
  const {
    isLoading: isUpdateLoading,
    asyncFunc: updateUser,
    res: updateResponse,
    err: updateUserErr,
  } = useAsyncFn( userApi.updateUser );

  const defaults = useMemo( () => {
    if ( userData ) {
      return {
        first_name: userData.first_name,
        last_name: userData.last_name,
        address: userData.address,
        email: userData.email,
        nickname: userData.nickname,
        phoneNumber: userData.phoneNumber,
      };
    }
  }, [ userData ] );

  const form = useForm<UserForm>({
    mode: "onChange",
    defaultValues: defaults,
  });

  const { register, handleSubmit, watch } = form;

  useEffectOnce( () => {
    searchParams?.userId && getUserDetail( searchParams.userId );
  });

  useEffect( () => form.reset( defaults ), [ defaults, form ] );

  watch();

  const onSubmit = async ( data: UpateUserParams ) => {
    if ( searchParams?.userId ) {
      await updateUser({ ...data, userId: searchParams.userId });
    }
  };

  const isUpdateUserError = Boolean( updateUserErr );

  return (
    <div className='user-page__container'>
      <Box sx={{ display: "flex" }}>
        <Typography variant='h4'> {`${buttonName} user`} </Typography>
        <Link className='update-user__link link__common' to={PageURL.BASE}>
          Back To Home
        </Link>
      </Box>
      {( isUserDetailLoading || isUpdateLoading ) && <CircularProgress size={30} />}
      <FormProvider {...form}>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit( onSubmit )();
          }}
          className='form__container'
        >
          <FormMapper
            model={updateFormModel}
            register={register}
            isLoading={isUpdateLoading || isUserDetailLoading}
            buttonName={buttonName}
          />
        </form>
      </FormProvider>
      {!isUpdateLoading && updateResponse && !isUpdateUserError && (
        <Typography sx={{ marginTop: 5 }} variant='h3'>
          User Updated Successfully
        </Typography>
      )}
      {isUpdateUserError && <Typography variant='h3'>Something Went wrong, Try Again</Typography>}
    </div>
  );
};
