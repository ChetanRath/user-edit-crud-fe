import React from "react";
import { Grid } from "@mui/material";

import { FormTextField, LoadingButton } from "components/atoms";

import { FormMapperCompProps } from "./types";

export const FormMapper: React.FC<FormMapperCompProps> = ({ model, isLoading, register, buttonName }) => {
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 3 }}>
      {model.map( ( item, index ) => (
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
  );
};
