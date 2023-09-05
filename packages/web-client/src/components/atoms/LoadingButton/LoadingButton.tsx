import React, { FC } from "react";
import { Button, CircularProgress } from "@mui/material";

import { LoadingButtonProps } from "./types";

export const LoadingButton: FC<LoadingButtonProps> = ({
  buttonProps,
  isLoading,
  children,
}) => {
  return (
    <Button {...buttonProps}>
      {isLoading ? <CircularProgress size={20} /> : children}
    </Button>
  );
};
