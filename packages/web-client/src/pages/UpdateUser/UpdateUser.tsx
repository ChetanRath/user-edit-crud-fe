import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { updateFormModel } from "utils/types/common/formMapping";

import { FormTextField } from "components/atoms/FormTextField";

export const UpdateUser = ({ buttonName = "Update" }: any ) => {
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
      <h1> {`${buttonName} user`} </h1>
      <FormProvider {...form}>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit( onSubmit )();
          }}
        >
          <Grid container rowSpacing={4} columnSpacing={{ xs: 3 }}>
            {updateFormModel.map( ( item, index ) => (
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
